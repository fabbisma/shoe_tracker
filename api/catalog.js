const {getCatalog}=require('../lib/catalog');
module.exports=async function handler(req,res){
  res.setHeader('Cache-Control','s-maxage=300, stale-while-revalidate=3600');
  try{const data=await getCatalog();res.status(200).json(data)}catch(err){res.status(500).json({error:'catalog_error',message:err.message})}
}
