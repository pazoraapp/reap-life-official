# REAP LIFE — Production Backend Setup

## 1. Create the Supabase project
Create a new Supabase project for REAP LIFE. Keep the project owner account private.

## 2. Run the database schema
Open Supabase SQL Editor and run `schema.sql` in full.

## 3. Create the first ministry account
Create the first user in Supabase Authentication > Users.
Then, in SQL Editor, promote that user's UUID to admin:

```sql
update public.profiles set role='admin', active=true where id='YOUR-AUTH-USER-UUID';
```

Do not put a service_role key in the website.

## 4. Add the public client settings
Open `assets/reap-config.js` and set:
- SUPABASE_URL = your project URL
- SUPABASE_PUBLISHABLE_KEY = your publishable/anon client key

These two values are designed to be public client configuration. Database RLS is the security boundary.

## 5. Test
Open `auth.html`, sign in, then confirm that `studio.html` redirects unauthenticated users and that the admin profile can access private modules.

## 6. Production media
Use the private Supabase buckets included in the schema for normal ministry media. For very large video libraries, R2 can be added later behind the same media_items table. Never expose private bucket paths without an authorized session/signed URL.

## 7. Deployment
For the eventual GitHub + Cloudflare Pages deployment, use the repository's main branch as the production branch. Cloudflare's Git integration automatically deploys pushes and creates preview deployments.
