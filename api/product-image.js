const ALLOWED_HOSTS = new Set([
  'runnea.fr','www.runnea.fr','i-run.fr','www.i-run.fr','decathlon.fr','www.decathlon.fr',
  'asics.com','www.asics.com','nike.com','www.nike.com','hoka.com','www.hoka.com',
  'saucony.com','www.saucony.com','adidas.fr','www.adidas.fr','adidas.com','www.adidas.com',
  'brooksrunning.com','www.brooksrunning.com','newbalance.fr','www.newbalance.fr','newbalance.com','www.newbalance.com',
  'on.com','www.on.com','idealo.fr','www.idealo.fr','alltricks.fr','www.alltricks.fr'
]);
function decodeHtml(s=''){return s.replace(/&amp;/g,'&').replace(/&quot;/g,'"').replace(/&#39;/g,"'").replace(/&lt;/g,'<').replace(/&gt;/g,'>')}
function findImage(html, base){
  const patterns=[
    /<meta[^>]+property=["']og:image(?::secure_url)?["'][^>]+content=["']([^"']+)["'][^>]*>/i,
    /<meta[^>]+content=["']([^"']+)["'][^>]+property=["']og:image(?::secure_url)?["'][^>]*>/i,
    /<meta[^>]+name=["']twitter:image["'][^>]+content=["']([^"']+)["'][^>]*>/i,
    /<meta[^>]+content=["']([^"']+)["'][^>]+name=["']twitter:image["'][^>]*>/i
  ];
  for(const re of patterns){const m=html.match(re);if(m&&m[1]){try{return new URL(decodeHtml(m[1]),base).toString()}catch{}}}
  return null;
}
module.exports=async function handler(req,res){
  const raw=Array.isArray(req.query?.url)?req.query.url[0]:req.query?.url;
  if(!raw) return res.status(400).json({error:'missing_url'});
  let page;
  try{page=new URL(raw)}catch{return res.status(400).json({error:'invalid_url'})}
  if(page.protocol!=='https:'||!ALLOWED_HOSTS.has(page.hostname.toLowerCase())) return res.status(403).json({error:'host_not_allowed'});
  const controller=new AbortController(); const timer=setTimeout(()=>controller.abort(),5000);
  try{
    const upstream=await fetch(page.toString(),{headers:{'user-agent':'Mozilla/5.0 Shoe-Tracker/0.12 image-metadata'},redirect:'follow',signal:controller.signal});
    if(!upstream.ok) throw new Error(`upstream_${upstream.status}`);
    const type=upstream.headers.get('content-type')||'';
    if(!type.includes('text/html')) throw new Error('not_html');
    const html=(await upstream.text()).slice(0,700000);
    const image=findImage(html,upstream.url||page.toString());
    if(!image) throw new Error('no_image');
    const imageUrl=new URL(image);
    if(!['https:','http:'].includes(imageUrl.protocol)) throw new Error('bad_image_url');
    res.setHeader('Cache-Control','public, s-maxage=86400, stale-while-revalidate=604800');
    return res.redirect(302,imageUrl.toString());
  }catch(err){
    return res.status(404).json({error:'image_unavailable'});
  }finally{clearTimeout(timer)}
};
