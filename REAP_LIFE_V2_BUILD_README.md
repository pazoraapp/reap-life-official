# REAP LIFE V2 — Foundation Build

This build establishes the new public/private architecture and media-first workflow.

## Included now
- Modern neutral REAP LIFE design system.
- Public homepage with visual/hybrid sections.
- Direct content/player page: `watch.html?id=...`.
- Private Ministry Studio interface.
- Full-message browser audio recording.
- Optional teaser marker while recording.
- Teaser remains separate from the full message; full playback starts from 00:00.
- Background image selection for visual-audio production.
- Visual-audio creator using browser Canvas + MediaRecorder.
- Landscape / vertical / square output choices.
- Downloadable visual-audio WebM.
- Share Center for direct links and destination-specific preparation.
- WhatsApp Status workflow explicitly treats 90 seconds as a teaser, not the full message.
- Existing REAP LIFE pages/files retained so the build does not discard earlier work.

## Important production boundary
This is a front-end foundation. Browser localStorage/object URLs are used for the prototype recording workflow. A real public deployment requires:
1. authentication and role-based authorization for Ministry Studio;
2. cloud media storage (e.g. Cloudflare R2 or another suitable storage layer);
3. a database for Master Messages, media relationships, publishing state and direct IDs;
4. public signed/controlled media URLs where appropriate;
5. server-side share metadata/Open Graph generation for rich social previews;
6. Cloudflare Worker/API integration for publishing and content management.

Do not treat the prototype local media storage as a secure backup.


## V2.1 Prayer + Live Completion Pass

Added and checked:
- `prayer-studio.html` — full Prayer Studio with long prayer programmes, multi-day sessions, Scripture, introductions/teaching, prayer points, written prayers, optional audio/video URLs, Prayer Mode, timer, point completion, Prayer Point library, and separate Prayer Care Inbox.
- `prayer.html` — redesigned public Prayer entry experience.
- `live.html` — bright/light modern Live page with controlled video playback, live-state placeholder, schedule area and navigation.
- Service worker cache updated to v7 and includes the new pages.

### Important production boundary
The Prayer Care Inbox in this static build is intentionally local-browser storage only. It is suitable for workflow testing, not for storing sensitive public prayer requests in production. Before public launch, connect authenticated server/database storage with role-based access, encryption/transport security, moderation, retention/archiving and audit controls.

### Verification performed
- 35 HTML pages inspected.
- 0 missing local `href`/`src` references found.
- 32 inline JavaScript blocks passed `node --check`.
- Core Prayer, Prayer Studio, Live, Ministry Studio and media pages confirmed present.
- New Prayer Studio and Live routes added to navigation/service worker.


## V2.2 Production backend connection pass

Added:
- Supabase client/auth layer (`assets/reap-config.js`, `assets/reap-supabase.js`).
- `auth.html` private Ministry sign-in.
- Role guards on Ministry Studio and production modules.
- `the Supabase schema already installed in your REAP LIFE project` with profiles, roles, master messages, media, Life Memo, Prayer programmes/sessions/points, Prayer Care, Live events, audit logs, RLS and private storage buckets.
- `assets/prayer-cloud.js` for authenticated Prayer Studio cloud programme sync and Prayer Care cloud loading.
- Cloudflare Pages Functions health/config endpoints.
- `backend/cloudflare-r2-plan.md` for future large-media storage.
- `visual-sources.html` preserving access to free visual sources.
- Existing conversation photos copied into `assets/photos/`.
- `setup.html` production connection checklist.

The actual Supabase project is intentionally not claimed as connected until the owner creates it and supplies the public project URL/publishable key. No service-role secret is included.


## Supabase connection for the current REAP LIFE project
Project URL is already filled in `assets/reap-config.js`. Paste your Supabase **Publishable key** into `SUPABASE_PUBLISHABLE_KEY`. Do not paste a secret/service_role key.

The current site is aligned to the database schema installed in the REAP LIFE Supabase project: `profiles`, `master_messages`, `lifememos`, `media`, `prayer_programs`, `prayer_sessions`, `prayer_points`, `prayer_requests`, `live_events`, and `content_links`.
