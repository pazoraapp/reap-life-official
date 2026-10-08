# REAP LIFE V3 — Public Design Patch

This patch redesigns the public REAP LIFE interface without replacing the Supabase/backend foundation.

Changed public pages:
- index.html
- lifememo.html
- prayer.html
- word.html
- message.html
- audio.html
- video.html
- presentation.html
- live.html
- search.html
- watch.html

Added:
- assets/reap-v3.css
- assets/reap-v3-shell.js

Main fixes:
- One unified REAP LIFE header/navigation
- Mobile hamburger navigation
- One Live route only
- Teach the Word appears in public navigation and points to presentation.html
- Consistent footer
- More premium typography, spacing, borders, shadows and responsive behavior
- Life Memo public page visually separated from technical studio controls
- Live page gets a brighter modern foundation
- Existing Supabase/auth/content logic is preserved

Upload order on GitHub mobile:
1. Open the repository root and upload the 11 HTML files in this patch.
2. Open/create the assets folder and upload reap-v3.css and reap-v3-shell.js.
3. Commit the changes.
4. Cloudflare Pages should deploy automatically from main.

Do not delete the other existing files.
