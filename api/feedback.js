const db=require('../lib/supabase-rest');
const allowedSentiments=new Set(['liked','mixed','disliked']);
const allowedFeedback=new Set(['tooRigid','tooSoft','tooHigh','tooLow','notReactive','tooReactive','unstable','comfortable']);
const allowedUses=new Set(['daily','long','tempo','race']);
function cleanArray(v,allowed){return Array.isArray(v)?v.filter(x=>allowed.has(x)).slice(0,12):[]}
module.exports=async function handler(req,res){
  if(req.method!=='POST') return res.status(405).json({error:'method_not_allowed'});
  const b=req.body||{};
  const row={
    shoe_id:Number.isFinite(Number(b.shoeId))?Number(b.shoeId):null,
    shoe_name:String(b.shoeName||'').slice(0,120),canonical:String(b.canonical||'').slice(0,120)||null,
    level:String(b.level||'').slice(0,30),weight_band:String(b.weightBand||'').slice(0,30),distance_km:Number.isFinite(Number(b.distanceKm))?Number(b.distanceKm):null,
    sentiment:allowedSentiments.has(b.sentiment)?b.sentiment:'mixed',feedback:cleanArray(b.feedback,allowedFeedback),uses:cleanArray(b.uses,allowedUses),source:'USER_DECLARED',created_at:new Date().toISOString()
  };
  if(!row.shoe_name) return res.status(400).json({error:'shoe_name_required'});
  if(!db.configured()) return res.status(202).json({stored:false,reason:'supabase_not_configured'});
  try{const out=await db.insert('community_feedback',[row]);res.status(201).json({stored:true,id:out?.[0]?.id||null})}
  catch(err){res.status(500).json({stored:false,error:'feedback_store_failed',message:err.message})}
}
