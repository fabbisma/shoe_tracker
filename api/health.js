const db=require('../lib/supabase-rest');
const strava=require('../lib/strava-session');
module.exports=async function handler(req,res){res.status(200).json({ok:true,version:'0.9.0',supabase:db.configured(),decathlonFeed:Boolean(process.env.DECATHLON_FEED_URL),strava:strava.configured(),time:new Date().toISOString()})}
