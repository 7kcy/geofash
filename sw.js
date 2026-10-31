// Network-only service worker: enables installable-app support without
// caching the game's large, externally hosted files.
self.addEventListener('fetch', function (event) {
  event.respondWith(fetch(event.request));
});
