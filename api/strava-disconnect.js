const strava = require('../lib/strava-session');

module.exports = async function handler(req,res){
  res.setHeader('Cache-Control','no-store, private');
  if(req.method !== 'POST') return res.status(405).json({error:'method_not_allowed'});
  const session = strava.getSession(req);
  try{
    if(session?.refresh_token && process.env.STRAVA_CLIENT_ID && process.env.STRAVA_CLIENT_SECRET){
      const basic = Buffer.from(`${process.env.STRAVA_CLIENT_ID}:${process.env.STRAVA_CLIENT_SECRET}`).toString('base64');
      await fetch('https://www.strava.com/oauth/revoke', {
        method:'POST',
        headers:{Authorization:`Basic ${basic}`,'content-type':'application/x-www-form-urlencoded'},
        body:new URLSearchParams({token:session.refresh_token,token_type_hint:'refresh_token'})
      });
    }
  }catch(err){
    console.error('strava_revoke_error',err);
  }finally{
    strava.clearSession(req,res);
  }
  return res.status(200).json({disconnected:true,localSessionDeleted:true});
};
