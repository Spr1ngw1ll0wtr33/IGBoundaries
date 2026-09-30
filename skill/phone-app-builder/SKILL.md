---
name: phone-app-builder
description: Use whenever Kathryn asks to build, change, install or fix a phone app, PWA, installable web app, or anything published to spr1ngw1ll0wtr33.github.io (Garden Diary, Memory Jar, Boundaries, or a new one). Read this BEFORE writing any code, because all her apps share one web address and one storage area, and getting that wrong has already broken installs.
---

# Building Kathryn's phone apps (PWAs)

Kathryn's apps are Progressive Web Apps published with GitHub Pages under ONE address,
`https://spr1ngw1ll0wtr33.github.io/<RepoName>/`, and installed on her Samsung Android phone
through Chrome. Existing apps: MyGardenDiary, MyMemoryJar, IGBoundaries.

## Rules learned the hard way (30/09/2026)

1. **Manifest `id` must be unique**: use `"id": "/<RepoName>/"`. NEVER `"./"` or `"/"`. Those
   resolve to the site root, so two apps share an identity; Chrome then says "This app is already
   installed" and cannot open it. Check every existing app's id before installing a new one.
2. **Service worker clean-up must only delete this app's own caches**, filtered by the app's own
   cache-name prefix. All apps share one cache storage; deleting every cache wipes the others.
3. **Never tell her to clear Chrome "site data" / "cookies and site data"** for this address: it
   wipes every app's entries at once. "Cached images and files" only is safe.
4. **Before building, check how the new app fits alongside the existing ones** (id, scope, cache
   names, storage keys) instead of discovering clashes afterwards.
5. **Diagnose install problems with evidence, not guesses**: on the phone, `chrome://webapks` lists
   each installed app's Scope, Start URL and Manifest Id. Ask for a screenshot first.
6. Use IndexedDB and ask for persistent storage (`navigator.storage.persist()`), with a
   backup-to-file and restore option, as Garden Diary does. localStorage alone is less reliable.
7. Keep the manifest `name` and `short_name` the same, about 12 characters or fewer.

## Publishing and installing
- GitHub Pages: repository **Settings → Pages → Deploy from a branch** → choose the branch → **/ (root)** → **Save**.
  Address: `spr1ngw1ll0wtr33.github.io/<RepoName>/`
- Phone: open the address in **Chrome** → **⋮** → **Install** (the top option, NOT "Create shortcut").
- Her launcher is **O'launcher** (text only, no icons): only true installed apps appear, never shortcuts.

## Working with Kathryn
- She is **not a developer**. Give numbered, plain-English, click-by-click instructions from the
  start, every time. Explain GitHub terms or avoid them.
- Keep builds simple. Don't turn a small job into a long session; if something fails, find the
  cause with evidence before asking her to try again.
- Don't repeat warnings she has already answered.
- British English, dd/mm/yyyy, 12-hour clock, polite and plain, no gushing.

## Design
Her visual style is "Layered Paper": see `DESIGN.md` and reference images in the IGBoundaries
repository. Other apps have their own designs (Garden Diary: `design/` folder in MyGardenDiary).
