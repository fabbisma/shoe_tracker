const crypto = require('crypto');
const strava = require('../lib/strava-session');

module.exports = async function handler(req,res){
  if(req.method !== 'GET') return res.status(405).json({error:'method_not_allowed'});
  res.setHeader('Cache-Control','no-store, private');
  if(!strava.configured()){
    return res.redirect(302, '/?strava=not-configured#historyTitle');
  }
  const state = crypto.randomBytes(24).toString('base64url');
  strava.setState(req,res,state);
  const base = strava.requestBaseUrl(req);
  const url = new URL('https://www.strava.com/oauth/authorize');
  url.searchParams.set('client_id', String(process.env.STRAVA_CLIENT_ID));
  url.searchParams.set('redirect_uri', `${base}/api/strava-callback`);
  url.searchParams.set('response_type', 'code');
  url.searchParams.set('approval_prompt', 'auto');
  // V0.6 : accès minimal au profil détaillé pour récupérer uniquement les chaussures + kilométrage.
  url.searchParams.set('scope', 'profile:read_all');
  url.searchParams.set('state', state);
  return res.redirect(302, url.toString());
};
