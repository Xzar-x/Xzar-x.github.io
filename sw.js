/* ============================================================
   sw.js — Service Worker dla Xzar-x Portfolio
   Strategia: Cache First (zasoby statyczne)
   ============================================================ */

const CACHE_NAME = 'xzar-x-v1';

/* Zasoby do pre-cache przy instalacji */
const PRECACHE_ASSETS = [
  '/',
  '/index.html',
  '/style.css',
  '/script.js',
  '/logo.png',
  '/manifest.json',
];

/* ----------------------------------------------------------
   INSTALL — pre-cache kluczowych zasobów
   ---------------------------------------------------------- */
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(PRECACHE_ASSETS);
    })
  );
  /* Aktywuj natychmiast bez czekania na zamknięcie starych kart */
  self.skipWaiting();
});

/* ----------------------------------------------------------
   ACTIVATE — usuń stare cache po aktualizacji SW
   ---------------------------------------------------------- */
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys
          .filter(key => key !== CACHE_NAME)
          .map(key => caches.delete(key))
      )
    )
  );
  /* Przejm kontrolę nad wszystkimi kartami od razu */
  self.clients.claim();
});

/* ----------------------------------------------------------
   FETCH — Cache First z fallbackiem do sieci
   ---------------------------------------------------------- */
self.addEventListener('fetch', event => {
  /* Obsługuj tylko GET, pomijaj zewnętrzne requesty (Formspree) */
  if (
    event.request.method !== 'GET' ||
    !event.request.url.startsWith(self.location.origin)
  ) {
    return;
  }

  event.respondWith(
    caches.match(event.request).then(cached => {
      if (cached) return cached;

      return fetch(event.request).then(response => {
        /* Cache tylko poprawne odpowiedzi */
        if (
          !response ||
          response.status !== 200 ||
          response.type === 'opaque'
        ) {
          return response;
        }

        const toCache = response.clone();
        caches.open(CACHE_NAME).then(cache => {
          cache.put(event.request, toCache);
        });

        return response;
      });
    })
  );
});
