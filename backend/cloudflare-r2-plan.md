# REAP LIFE — Large Media Storage Plan

The primary database/auth boundary is Supabase. For a large ministry video library, Cloudflare R2 can be added without changing public content IDs because `media_items` already stores a storage bucket/path.

Recommended split:
- Supabase: Auth, profiles, roles, Prayer Care, metadata, publishing state.
- Supabase private storage: ordinary images/audio/smaller files.
- R2: long/full video and very large visual-audio exports when the library grows.
- `media_items`: one canonical record regardless of storage provider.

Do not put Cloudflare R2 secrets or Supabase service-role keys in browser JavaScript. Use a server-side Worker/Pages Function for signed uploads/downloads.
