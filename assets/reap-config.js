/* REAP LIFE public client configuration.
   The publishable key is safe for browser use when RLS is configured.
   NEVER put a Supabase secret/service_role key here. */
window.REAP_CONFIG = Object.assign({
  SUPABASE_URL: 'https://hzcwmbrggyjwahdgslvt.supabase.co',
  SUPABASE_PUBLISHABLE_KEY: 'sb_publishable_4OYF0zPcwzue4QwW7hEQlA_rBcwJcJ0',
  APP_NAME: 'REAP LIFE'
}, window.REAP_CONFIG || {});
