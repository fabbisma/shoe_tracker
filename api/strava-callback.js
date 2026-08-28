const strava = require('../lib/strava-session');

module.exports = async function handler(req,res){
  res.setHeader('Cache-Control','no-store, private');
  if(req.method !== 'GET') return res.status(405).json({error:'method_not_allowed'});
  if(!strava.configured()) return res.redirect(302, '/?strava=not-configured#historyTitle');
  const expected = strava.consumeState(req,res);
  const received = typeof req.query?.state === 'string' ? req.query.state : '';
  if(!expected || !received || expected !== received) return res.redirect(302, '/?strava=state-error#historyTitle');
  if(req.query?.error) return res.redirect(302, '/?strava=denied#historyTitle');
  const code = typeof req.query?.code === 'string' ? req.query.code : '';
  if(!code) return res.redirect(302, '/?strava=missing-code#historyTitle');
  try{
    const token = await strava.tokenRequest({grant_type:'authorization_code', code});
    strava.setSession(req,res,{
      access_token:token.access_token,
      refresh_token:token.refresh_token,
      expires_at:token.expires_at,
      athlete_id:token.athlete?.id || null,
      connected_at:new Date().toISOString()
    });
    return res.redirect(302, '/?strava=connected#historyTitle');
  }catch(err){
    console.error('strava_callback_error', err);
    return res.redirect(302, '/?strava=token-error#historyTitle');
  }
};
