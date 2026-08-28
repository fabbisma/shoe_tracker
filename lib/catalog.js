const seed=require('../data/real-seed.json');
const db=require('./supabase-rest');

function clamp(n,min,max){return Math.max(min,Math.min(max,n))}
function dealScore(price,ref,best){
  if(!price||!ref) return 50;
  const discount=Math.max(0,(ref-price)/ref*100);
  const nearBest=best&&price<=best*1.05?7:0;
  return clamp(Math.round(55+discount*.65+nearBest),50,98);
}
function mapModel(model,offers=[]){
  const offerRows=offers.filter(o=>String(o.shoe_id)===String(model.id)&&o.active!==false);
  const sorted=offerRows.filter(o=>Number.isFinite(Number(o.price))).sort((a,b)=>Number(a.price)-Number(b.price));
  const best=sorted[0];
  const sizes=[...new Set(offerRows.map(o=>o.size_eu).filter(Boolean).map(String))];
  const price=best?Number(best.price):Number(model.reference_price||model.launch_price||999);
  const ref=Number(best?.list_price||model.launch_price||model.reference_price||price);
  return {
    id:Number(model.id),family:model.family_slug||model.slug||String(model.id),brand:model.brand,name:model.name,generation:model.generation||'N',
    terrain:model.terrain||['route'],levels:model.levels||['occasionnel','regulier'],uses:model.uses||['daily'],drop:Number(model.drop_mm||8),
    cushion:model.cushion||'moderate',foam:model.foam_feel||'balanced',carbon:Boolean(model.carbon_plate),launch:ref,referencePriceType:model.launch_price_verified?'launch':'observed',
    avg90:Number(model.avg90_price||price),best:Number(model.best_price||price),price,shop:best?.retailer_name||'RunDeal',sizes:sizes.length?sizes:['*'],sizeStockKnown:sizes.length>0,
    weightRange:model.weight_range||[45,110],expert:Number(model.expert_score||85),community:Number(model.community_score||85),deal:dealScore(price,ref,Number(model.best_price||price)),
    athlete:model.athlete_note||'Pas de performance élite renseignée',reviews:model.review_points||[],offers:sorted.map(o=>[o.retailer_name||'Marchand',Number(o.price)]),isReal:true,
    checkedAt:best?.checked_at||model.updated_at||new Date().toISOString(),sourceUrl:best?.product_url||model.source_url||null
  };
}

async function getCatalog(){
  if(!db.configured()) return {source:'seed',shoes:seed.shoes,snapshotDate:seed.snapshotDate};
  try{
    const models=await db.select('shoe_models','select=*&active=eq.true&order=brand.asc,name.asc');
    const offers=await db.select('offers','select=*&active=eq.true');
    const retailers=await db.select('retailers','select=id,name');
    const names=new Map((retailers||[]).map(r=>[String(r.id),r.name]));
    (offers||[]).forEach(o=>o.retailer_name=names.get(String(o.retailer_id))||o.retailer_name||'Marchand');
    return {source:'supabase',shoes:(models||[]).map(m=>mapModel(m,offers||[])),snapshotDate:new Date().toISOString()};
  }catch(err){
    return {source:'seed',shoes:seed.shoes,snapshotDate:seed.snapshotDate,warning:err.message};
  }
}
module.exports={getCatalog};
