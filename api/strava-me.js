const strava = require('../lib/strava-session');

module.exports = async function handler(req,res){
  res.setHeader('Cache-Control','no-store, private');
  res.setHeader('Pragma','no-cache');
  if(req.method !== 'GET') return res.status(405).json({error:'method_not_allowed'});
  if(!strava.configured()) return res.status(503).json({connected:false,configured:false,error:'strava_not_configured'});
  try{
    const session = await strava.validSession(req,res);
    if(!session) return res.status(401).json({connected:false,configured:true});
    const response = await fetch('https://api-v3.strava.com/athlete', {
      headers:{Authorization:`Bearer ${session.access_token}`,accept:'application/json'},
      cache:'no-store'
    });
    if(response.status === 401){
      strava.clearSession(req,res);
      return res.status(401).json({connected:false,configured:true});
    }
    const text = await response.text();
    if(!response.ok) throw new Error(`Strava athlete ${response.status}: ${text.slice(0,200)}`);
    const athlete = JSON.parse(text);
    const shoes = (Array.isArray(athlete.shoes) ? athlete.shoes : []).map(g => ({
      id:String(g.id || ''),
      name:String(g.name || 'Chaussure Strava'),
      distanceKm:Math.round((Number(g.distance || 0)/1000)*10)/10,
      primary:Boolean(g.primary)
    }));
    return res.status(200).json({
      connected:true,
      configured:true,
      athlete:{firstname:String(athlete.firstname || '')},
      shoes,
      privacy:{source:'STRAVA_PRIVATE',persistentDatabase:false,communityTransfer:false,sessionMaxAgeDays:7}
    });
  }catch(err){
    console.error('strava_me_error',err);
    return res.status(502).json({connected:false,configured:true,error:'strava_fetch_failed'});
  }
};
