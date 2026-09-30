/* My Boundaries: the offline copy.
   Every file the page needs is kept on the phone, so it opens with no internet.
   When the page is changed, raise VERSION so phones fetch the new copy. */

const VERSION = 'boundaries-v1';
const FILES = [
  './',
  'index.html',
  'manifest.json',
  'reference-b.jpg',
  'fonts/poiret-one-latin-400-normal.woff2',
  'fonts/josefin-sans-latin-400-normal.woff2',
  'fonts/josefin-sans-latin-600-normal.woff2',
  'fonts/josefin-sans-latin-300-italic.woff2',
  'icons/icon-192.png',
  'icons/icon-512.png',
  'icons/icon-maskable-512.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(caches.open(VERSION).then((cache) => cache.addAll(FILES)));
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== VERSION).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

/* Try the internet first so changes show up; fall back to the offline copy. */
self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;
  event.respondWith(
    fetch(event.request)
      .then((response) => {
        const copy = response.clone();
        caches.open(VERSION).then((cache) => cache.put(event.request, copy));
        return response;
      })
      .catch(() => caches.match(event.request, { ignoreSearch: true }))
  );
});
