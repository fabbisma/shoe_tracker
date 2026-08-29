const crypto = require('crypto');

const SESSION_COOKIE = 'shoe_tracker_strava_session';
const STATE_COOKIE = 'shoe_tracker_strava_state';
const SESSION_MAX_AGE = 7 * 24 * 60 * 60; // 7 jours maximum pour la session prototype
const STATE_MAX_AGE = 10 * 60;

function configured(){
  return Boolean(process.env.STRAVA_CLIENT_ID && process.env.STRAVA_CLIENT_SECRET && process.env.STRAVA_SESSION_SECRET);
}

function key(){
  if(!process.env.STRAVA_SESSION_SECRET) throw new Error('STRAVA_SESSION_SECRET missing');
  return crypto.createHash('sha256').update(process.env.STRAVA_SESSION_SECRET).digest();
}

function b64url(buffer){ return Buffer.from(buffer).toString('base64url'); }
function fromB64url(value){ return Buffer.from(value, 'base64url'); }

function encrypt(value){
  const iv = crypto.randomBytes(12);
  const cipher = crypto.createCipheriv('aes-256-gcm', key(), iv);
  const plaintext = Buffer.from(JSON.stringify(value), 'utf8');
  const encrypted = Buffer.concat([cipher.update(plaintext), cipher.final()]);
  const tag = cipher.getAuthTag();
  return `v1.${b64url(iv)}.${b64url(tag)}.${b64url(encrypted)}`;
}

function decrypt(token){
  try{
    const [version, ivRaw, tagRaw, dataRaw] = String(token || '').split('.');
    if(version !== 'v1' || !ivRaw || !tagRaw || !dataRaw) return null;
    const decipher = crypto.createDecipheriv('aes-256-gcm', key(), fromB64url(ivRaw));
    decipher.setAuthTag(fromB64url(tagRaw));
    const out = Buffer.concat([decipher.update(fromB64url(dataRaw)), decipher.final()]);
    return JSON.parse(out.toString('utf8'));
  }catch(_err){ return null; }
}

function cookies(req){
  const out = {};
  String(req.headers.cookie || '').split(';').forEach(part => {
    const i = part.indexOf('=');
    if(i < 0) return;
    const name = part.slice(0, i).trim();
    const value = part.slice(i + 1).trim();
    if(name) out[name] = decodeURIComponent(value);
  });
  return out;
}

function isSecure(req){
  const proto = String(req.headers['x-forwarded-proto'] || '').split(',')[0].trim();
  const host = String(req.headers.host || '');
  return proto === 'https' || (!host.startsWith('localhost') && !host.startsWith('127.0.0.1'));
}

function cookieLine(name, value, {maxAge, httpOnly=true, secure=false}={}){
  const parts = [`${name}=${encodeURIComponent(value)}`, 'Path=/', 'SameSite=Lax'];
  if(httpOnly) parts.push('HttpOnly');
  if(secure) parts.push('Secure');
  if(Number.isFinite(maxAge)) parts.push(`Max-Age=${Math.max(0, Math.floor(maxAge))}`);
  return parts.join('; ');
}

function appendSetCookie(res, line){
  const current = res.getHeader('Set-Cookie');
  const next = current ? (Array.isArray(current) ? [...current, line] : [current, line]) : line;
  res.setHeader('Set-Cookie', next);
}

function setSession(req, res, session){
  appendSetCookie(res, cookieLine(SESSION_COOKIE, encrypt(session), {maxAge:SESSION_MAX_AGE, secure:isSecure(req)}));
}
function clearSession(req, res){
  appendSetCookie(res, cookieLine(SESSION_COOKIE, '', {maxAge:0, secure:isSecure(req)}));
}
function getSession(req){
  const raw = cookies(req)[SESSION_COOKIE];
  return raw ? decrypt(raw) : null;
}
function setState(req, res, state){
  appendSetCookie(res, cookieLine(STATE_COOKIE, state, {maxAge:STATE_MAX_AGE, secure:isSecure(req)}));
}
function consumeState(req, res){
  const value = cookies(req)[STATE_COOKIE] || null;
  appendSetCookie(res, cookieLine(STATE_COOKIE, '', {maxAge:0, secure:isSecure(req)}));
  return value;
}

function requestBaseUrl(req){
  if(process.env.APP_BASE_URL) return process.env.APP_BASE_URL.replace(/\/$/, '');
  const proto = String(req.headers['x-forwarded-proto'] || 'https').split(',')[0].trim();
  const host = String(req.headers['x-forwarded-host'] || req.headers.host || '').split(',')[0].trim();
  return `${proto}://${host}`.replace(/\/$/, '');
}

async function tokenRequest(params){
  const body = new URLSearchParams({
    client_id:String(process.env.STRAVA_CLIENT_ID || ''),
    client_secret:String(process.env.STRAVA_CLIENT_SECRET || ''),
    ...params
  });
  const response = await fetch('https://www.strava.com/oauth/token', {
    method:'POST',
    headers:{'content-type':'application/x-www-form-urlencoded','accept':'application/json'},
    body
  });
  const text = await response.text();
  let payload = null;
  try{ payload = text ? JSON.parse(text) : {}; }catch(_err){ payload = {message:text}; }
  if(!response.ok) throw new Error(`Strava token ${response.status}: ${payload?.message || text || 'unknown error'}`);
  return payload;
}

async function validSession(req, res){
  let session = getSession(req);
  if(!session || !session.refresh_token) return null;
  const now = Math.floor(Date.now()/1000);
  if(session.access_token && Number(session.expires_at || 0) > now + 90) return session;
  const refreshed = await tokenRequest({grant_type:'refresh_token', refresh_token:session.refresh_token});
  session = {
    access_token:refreshed.access_token,
    refresh_token:refreshed.refresh_token,
    expires_at:refreshed.expires_at,
    athlete_id:session.athlete_id || null,
    connected_at:session.connected_at || new Date().toISOString()
  };
  setSession(req, res, session);
  return session;
}

module.exports = {
  configured, SESSION_MAX_AGE, setSession, clearSession, getSession, setState, consumeState,
  requestBaseUrl, tokenRequest, validSession
};
