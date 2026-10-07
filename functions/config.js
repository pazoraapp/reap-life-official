export async function onRequestGet({env}) {
  return new Response(JSON.stringify({configured:!!(env?.SUPABASE_URL&&env?.SUPABASE_PUBLISHABLE_KEY),supabaseUrl:env?.SUPABASE_URL||null}),{headers:{'content-type':'application/json','cache-control':'no-store'}});
}
