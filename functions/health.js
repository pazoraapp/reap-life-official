export async function onRequestGet() {
  return new Response(JSON.stringify({ok:true,service:'REAP LIFE API',time:new Date().toISOString()}),{headers:{'content-type':'application/json','cache-control':'no-store'}});
}
