const CACHE_VERSION = "komik-anime-v20.1.16";
const CACHE_PREFIX = "komik-anime-";

const REQUIRED_SHELL = [
  "./",
  "./index.html"
];

const OPTIONAL_SHELL = [
  "./manifest-v20.1.webmanifest",
  "./app-icon-v20.1.svg"
];

// Memasang service worker dan menyimpan file utama.
self.addEventListener("install", (event) => {
  event.waitUntil(
    (async () => {
      const cache =
        await caches.open(CACHE_VERSION);

      // File wajib.
      await cache.addAll(REQUIRED_SHELL);

      // File tambahan tidak menggagalkan instalasi
      // jika manifest atau icon belum tersedia.
      await Promise.allSettled(
        OPTIONAL_SHELL.map((asset) =>
          cache.add(asset)
        )
      );

      await self.skipWaiting();
    })()
  );
});

// Menghapus cache versi lama.
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(
          keys
            .filter(
              (key) =>
                key.startsWith(CACHE_PREFIX) && key !== CACHE_VERSION
            )
            .map((key) =>
              caches.delete(key)
            )
        )
      )
      .then(() => self.clients.claim())
  );
});

// Memungkinkan aplikasi mengaktifkan
// service worker baru secara langsung.
self.addEventListener("message", (event) => {
  if (event.data?.type === "SKIP_WAITING") {
    self.skipWaiting();
  }
});

// Mengelola permintaan jaringan dan cache.
self.addEventListener("fetch", (event) => {
  const request = event.request;

  if (request.method !== "GET") {
    return;
  }

  const url = new URL(request.url);

  // Data Firebase selalu mengambil dari jaringan.
  // Ini mencegah data Firestore tertahan cache lama.
  if (
    url.hostname.includes("googleapis.com") ||
    url.hostname.includes("firebaseio.com")
  ) {
    return;
  }

  // Halaman HTML menggunakan network-first.
  if (
    request.mode === "navigate" ||
    request.destination === "document"
  ) {
    event.respondWith(
      (async () => {
        try {
          const response = await fetch(
            request,
            {
              cache: "no-store"
            }
          );

          if (response.ok) {
            // Clone dilakukan sebelum response
            // dikembalikan ke browser.
            const copy = response.clone();

            const cache =
              await caches.open(
                CACHE_VERSION
              );

            await cache.put(
              "./index.html",
              copy
            );
          }

          return response;
        } catch (error) {
          const cachedPage =
            await caches.match(
              "./index.html"
            );

          return (
            cachedPage ||
            Response.error()
          );
        }
      })()
    );

    return;
  }

  // Aset lokal menggunakan
  // stale-while-revalidate.
  if (url.origin === self.location.origin) {
    event.respondWith(
      (async () => {
        const cached =
          await caches.match(request);

        const network = fetch(request)
          .then(async (response) => {
            if (response.ok) {
              // Clone dibuat sebelum response
              // digunakan atau dikembalikan.
              const copy =
                response.clone();

              const cache =
                await caches.open(
                  CACHE_VERSION
                );

              await cache.put(
                request,
                copy
              );
            }

            return response;
          })
          .catch(() => {
            return (
              cached ||
              Response.error()
            );
          });

        return cached || network;
      })()
    );
  }
});
