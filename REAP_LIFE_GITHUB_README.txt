REAP LIFE — GITHUB READY FIXED BUILD

This build continues from REAP_LIFE_V1_GITHUB_READY.

Fix included:
- Prayer no longer remains on Loading when the library is unavailable; it reports the actual problem.
- Audio no longer remains on Loading when no recording is attached.
- Video no longer remains on Loading when no recording is attached.
- Player and Media pages use the same library path.
- All pages use library.json consistently.
- Service worker cache updated and HTML/JSON use network-first loading to reduce stale-page problems.

GitHub Pages:
Upload the contents of this folder to the repository root, keeping the content/, assets/ and icons/ folders.

CONTENT CONTROL / EDITOR UPDATE
- content-entry.html is now the main local content control/editor.
- Create or paste a master sermon/message and edit it without AI.
- Connect one master message to Life Memo, Prayer, short/full audio, short/full video, written sermon and share graphic IDs.
- Repeat-use checking warns about exact title, same primary Scripture, exact message text, same topic and recent use.
- Warnings do not block deliberate reuse: the pastor/ministry decides.
- Usage history is stored locally in the browser and can be exported with the library JSON.
- Because GitHub Pages is static, browser edits do not directly write back to GitHub. Use Export, then replace the repository's library.json when you want the published library updated.


CONTENT CONVERSION + SHARE STUDIO
- convert.html: creates editable Life Memo, Prayer, Short Audio, Short Video, Full Audio, Full Video, Written Sermon and Share Graphic child records linked to a master message.
- share-studio.html: creates platform-oriented 9:16 status/story and post previews, downloadable share images, captions and device sharing.
- Static GitHub version cannot override WhatsApp/Facebook platform playback rules. It prepares actual media/files and share-ready designs where supported.
- Browser localStorage is used for editing in this static version; export the library JSON after changes.

V19 PROFESSIONAL DESIGN UPDATE
- Added a professional REAP LIFE visual design system to Life Memo Studio.
- Added six selectable themes: Warm Ivory, Deep Navy, Royal Wine, Deep Forest, Earth & Sand, Quiet Sky.
- Theme selection is saved on the device and does not remove existing photo, banner, prayer, save, or sharing features.
- Existing Life Memo image archive, user photo IndexedDB library, URL photo import, banner creation, download/share, and text controls are preserved.
- The redesign uses photographic backgrounds for finished banners; the six themes style the app/editor interface and branding rather than replacing the existing photo-banner workflow.


DAILY WORD CONTINUITY
---------------------
The Daily Word layer ensures REAP LIFE can publish a Word every day without requiring video or audio. A day may use Video, Audio, Written Message, Uploaded Sermon, or Life Memo Only. The system warns when the selected media is not attached and recommends the next available format. Media can be attached later. Daily Word planning is stored in the browser's local storage in this GitHub-static version.


CONNECTION MAP
- connections.html links one master message to Life Memo, Prayer, Written Sermon, Short/Full Audio, Short/Full Video and Share Graphic.
- Daily Word reads the same master message and shows connected assets; missing media never blocks publication.
- Connections are IDs/references, not duplicated content. Media can be attached later.

DIRECT RECORDING STUDIO
- recorder.html adds professional in-app audio/video recording using the browser MediaRecorder API.
- Audio and video expressions can open the Recording Studio from expression-editor.html.
- Recordings are previewed before saving and can be re-recorded.
- Saved recordings are stored in IndexedDB on the current device and linked to the Master Message through localStorage.
- GitHub Pages must be served over HTTPS for microphone/camera recording permissions.
- Static GitHub Pages cannot permanently upload recordings into the repository. Cross-device/cloud media storage can be added later with a backend/storage service.


QUICK PROFESSIONAL EDITOR
- editor.html provides a phone-friendly quick editor for recorded/imported video.
- Includes trim controls, Life Memo title/Scripture presentation, optional background music selection, preview and browser export where supported.
- Export uses the browser MediaRecorder API; Chrome on Android over HTTPS is recommended.
- This is intentionally a low-stress editor. Advanced multi-track production can remain optional.
REPAIR PASS — 2026-10-06
- Repaired a JavaScript syntax error in convert.html that could stop the Content Conversion page from running.
- Confirmed all inline JavaScript blocks in the HTML pages pass Node syntax validation.
- Confirmed the LIFE MEMO “Give Me Another Word” button is still present.
- Restored/added editable LIFE MEMO title controls: Edit Title, Save Title, Cancel, and Restore Original. Edited titles are saved locally on the device and are used when creating the banner.
- Updated the service worker cache version and included recorder.html and presentation.html so the newer presentation/recording pages are not omitted from the offline cache.
- No existing Life Memo image, banner, prayer, save, sharing, theme, or “Give Me Another Word” feature was intentionally removed by this repair.
