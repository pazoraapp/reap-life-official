# REAP LIFE backend layer

This directory contains the production schema and setup instructions. The website intentionally ships with blank public Supabase configuration until the owner creates the project.

Files:
- `schema.sql` — database tables, RLS, roles, Prayer Care rules and private storage buckets.
- `SETUP.md` — exact setup sequence.
- `cloudflare-r2-plan.md` — large-media architecture.

Security rule: never place a Supabase `service_role` key or Cloudflare R2 secret in browser code.
