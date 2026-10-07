(function(){
  const cfg=window.REAP_CONFIG||{};
  function ready(){return !!(cfg.SUPABASE_URL&&cfg.SUPABASE_PUBLISHABLE_KEY&&window.supabase?.createClient)}
  let client=null;
  window.REAP_AUTH={
    configured:ready,
    client:function(){
      if(!ready()) throw new Error('REAP LIFE cloud authentication is not configured yet.');
      if(!client) client=window.supabase.createClient(cfg.SUPABASE_URL,cfg.SUPABASE_PUBLISHABLE_KEY,{auth:{persistSession:true,autoRefreshToken:true,detectSessionInUrl:true}});
      return client;
    },
    session:async function(){const c=this.client();const r=await c.auth.getSession();return r.data.session||null},
    user:async function(){const s=await this.session();return s?.user||null},
    signIn:async function(email,password){return this.client().auth.signInWithPassword({email,password})},
    signOut:async function(){return this.client().auth.signOut()},
    reset:async function(email,redirectTo){return this.client().auth.resetPasswordForEmail(email,{redirectTo})},
    profile:async function(){const c=this.client();const u=await this.user();if(!u)return null;const r=await c.from('profiles').select('*').eq('id',u.id).maybeSingle();if(r.error)throw r.error;return r.data},
    requireRole:async function(roles){
      if(!this.configured()) { location.href='./auth.html?reason=not-configured'; return null; }
      const u=await this.user(); if(!u){location.href='./auth.html?reason=signin';return null;}
      const p=await this.profile(); const role=p?.role||'viewer';
      if(roles && !roles.includes(role)){location.href='./auth.html?reason=forbidden';return null;}
      return {user:u,profile:p,role};
    }
  };
})();
