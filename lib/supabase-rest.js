const base=process.env.SUPABASE_URL;
const key=process.env.SUPABASE_SERVICE_ROLE_KEY;

function configured(){return Boolean(base&&key)}
function headers(extra={}){return {apikey:key,Authorization:`Bearer ${key}`,'Content-Type':'application/json',...extra}}
async function request(path,options={}){
  if(!configured()) throw new Error('Supabase not configured');
  const res=await fetch(`${base.replace(/\/$/,'')}/rest/v1/${path}`,{...options,headers:headers(options.headers||{})});
  if(!res.ok){const text=await res.text();throw new Error(`Supabase ${res.status}: ${text}`)}
  if(res.status===204) return null;
  const text=await res.text(); return text?JSON.parse(text):null;
}
async function select(table,query=''){return request(`${table}?${query}`,{method:'GET'})}
async function insert(table,rows,{upsert=false,onConflict}={}){
  let path=table; if(onConflict) path+=`?on_conflict=${encodeURIComponent(onConflict)}`;
  return request(path,{method:'POST',headers:{Prefer:upsert?'resolution=merge-duplicates,return=representation':'return=representation'},body:JSON.stringify(rows)});
}
module.exports={configured,select,insert};
