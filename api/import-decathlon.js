const {parse}=require('csv-parse/sync');
const {XMLParser}=require('fast-xml-parser');
const db=require('../lib/supabase-rest');

function auth(req){const expected=process.env.IMPORT_SECRET||process.env.CRON_SECRET; if(!expected) return false; const h=req.headers.authorization||''; return h===`Bearer ${expected}`}
function first(row,names){for(const n of names){if(row[n]!=null&&String(row[n]).trim()!=='') return row[n]} const lower={};Object.keys(row||{}).forEach(k=>lower[k.toLowerCase()]=row[k]);for(const n of names){if(lower[n.toLowerCase()]!=null) return lower[n.toLowerCase()]} return null}
function money(v){if(v==null)return null;const n=Number(String(v).replace(/[^0-9,.-]/g,'').replace(',','.'));return Number.isFinite(n)?n:null}
function normalize(row){
  const title=String(first(row,['title','name','product_name','productName','libelle','designation'])||'').trim();
  const hay=title.toLowerCase();
  if(!title || !/(running|trail|jogging|kiprun)/.test(hay) || !/(chauss|shoe|basket)/.test(hay)) return null;
  return {
    external_id:String(first(row,['id','product_id','merchant_product_id','sku','reference','ref'])||title).slice(0,180),
    title,brand:String(first(row,['brand','marque'])||'KIPRUN').slice(0,80),ean:String(first(row,['ean','gtin','barcode'])||'').slice(0,40)||null,
    price:money(first(row,['price','sale_price','current_price','prix'])),list_price:money(first(row,['old_price','regular_price','original_price','prix_barre','rrp'])),
    product_url:String(first(row,['url','link','deeplink','product_url','productUrl'])||'').slice(0,1000)||null,image_url:String(first(row,['image','image_url','image_link','picture'])||'').slice(0,1000)||null,
    availability:String(first(row,['availability','stock','in_stock'])||'unknown').slice(0,60),size_eu:String(first(row,['size','size_eu','taille'])||'').slice(0,20)||null,raw:row
  }
}
function rowsFromXml(text){const obj=new XMLParser({ignoreAttributes:false,attributeNamePrefix:''}).parse(text); const arrays=[]; function walk(v){if(Array.isArray(v)&&v.length&&v.every(x=>x&&typeof x==='object')) arrays.push(v); else if(v&&typeof v==='object') Object.values(v).forEach(walk)} walk(obj); return arrays.sort((a,b)=>b.length-a.length)[0]||[]}
async function parseFeed(res){const text=await res.text();const ct=(res.headers.get('content-type')||'').toLowerCase(); if(ct.includes('json')||text.trim().startsWith('{')||text.trim().startsWith('[')){const j=JSON.parse(text);return Array.isArray(j)?j:(j.products||j.items||j.data||[])} if(ct.includes('xml')||text.trim().startsWith('<')) return rowsFromXml(text); return parse(text,{columns:true,skip_empty_lines:true,relax_column_count:true,bom:true,delimiter:[',',';','\t']})}
module.exports=async function handler(req,res){
  if(!auth(req)) return res.status(401).json({error:'unauthorized'});
  if(!db.configured()) return res.status(503).json({error:'supabase_not_configured'});
  const url=process.env.DECATHLON_FEED_URL; if(!url) return res.status(503).json({error:'decathlon_feed_not_configured'});
  try{
    const feedRes=await fetch(url,{headers:{'user-agent':'RunDeal/0.5 product-feed importer'}}); if(!feedRes.ok) throw new Error(`Feed HTTP ${feedRes.status}`);
    const rawRows=await parseFeed(feedRes); const items=rawRows.map(normalize).filter(Boolean).filter(x=>x.price!=null).slice(0,10000);
    const retailers=await db.insert('retailers',[{slug:'decathlon',name:'Decathlon'}],{upsert:true,onConflict:'slug'}); const retailerId=retailers?.[0]?.id;
    const merchantRows=items.map(x=>({retailer_id:retailerId,external_id:x.external_id,title:x.title,brand:x.brand,ean:x.ean,product_url:x.product_url,image_url:x.image_url,availability:x.availability,size_eu:x.size_eu,raw:x.raw,last_seen_at:new Date().toISOString()}));
    if(merchantRows.length) await db.insert('merchant_products',merchantRows,{upsert:true,onConflict:'retailer_id,external_id'});
    // Matching to canonical shoe_models is intentionally separate. Only already-matched products create offers.
    const products=await db.select('merchant_products',`select=id,external_id&retailer_id=eq.${retailerId}`); const productIds=new Map((products||[]).map(p=>[p.external_id,p.id]));
    const matches=await db.select('product_matches','select=merchant_product_id,shoe_id&approved=eq.true'); const shoeByProduct=new Map((matches||[]).map(m=>[String(m.merchant_product_id),m.shoe_id]));
    const offerRows=[]; const hist=[]; const now=new Date().toISOString();
    for(const x of items){const mp=productIds.get(x.external_id);const shoeId=shoeByProduct.get(String(mp));if(!shoeId) continue;offerRows.push({shoe_id:shoeId,retailer_id:retailerId,merchant_product_id:mp,size_eu:x.size_eu,price:x.price,list_price:x.list_price,product_url:x.product_url,active:!/(out|rupture|unavailable)/i.test(x.availability),checked_at:now});hist.push({shoe_id:shoeId,retailer_id:retailerId,size_eu:x.size_eu,price:x.price,observed_at:now})}
    if(offerRows.length) await db.insert('offers',offerRows,{upsert:true,onConflict:'merchant_product_id,size_eu'}); if(hist.length) await db.insert('price_history',hist);
    res.status(200).json({ok:true,rows:rawRows.length,runningProducts:items.length,matchedOffers:offerRows.length,unmatched:items.length-offerRows.length});
  }catch(err){res.status(500).json({error:'import_failed',message:err.message})}
}
