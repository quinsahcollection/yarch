const CACHE_VERSION = 'komik-anime-v18.0.0';
const APP_SHELL = ['./', './index.html', './manifest-v18.webmanifest', './app-icon-v18.svg'];

self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE_VERSION).then(cache => cache.addAll(APP_SHELL)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', event => {
  event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(key => key !== CACHE_VERSION).map(key => caches.delete(key)))).then(() => self.clients.claim()));
});

self.addEventListener('message', event => {
  if (event.data?.type === 'SKIP_WAITING') self.skipWaiting();
});

self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;
  const url = new URL(event.request.url);

  // Firebase selalu melalui jaringan agar data tidak tertahan cache lama.
  if (url.hostname.includes('googleapis.com') || url.hostname.includes('firebaseio.com')) return;

  // HTML/navigation menggunakan network-first: versi terbaru selalu diprioritaskan.
  if (event.request.mode === 'navigate' || event.request.destination === 'document') {
    event.respondWith(fetch(event.request, { cache: 'no-store' }).then(response => {
      if (response.ok) caches.open(CACHE_VERSION).then(cache => cache.put('./index.html', response.clone()));
      return response;
    }).catch(() => caches.match('./index.html')));
    return;
  }

  // Aset lokal menggunakan stale-while-revalidate untuk pembukaan yang cepat.
  if (url.origin === self.location.origin) {
    event.respondWith(caches.match(event.request).then(cached => {
      const network = fetch(event.request).then(response => {
        if (response.ok) caches.open(CACHE_VERSION).then(cache => cache.put(event.request, response.clone()));
        return response;
      }).catch(() => cached);
      return cached || network;
    }));
  }
});
