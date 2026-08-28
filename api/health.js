const db=require('../lib/supabase-rest');
module.exports=async function handler(req,res){res.status(200).json({ok:true,version:'0.5.0',supabase:db.configured(),decathlonFeed:Boolean(process.env.DECATHLON_FEED_URL),time:new Date().toISOString()})}
