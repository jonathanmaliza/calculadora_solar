const CACHE_NAME = "calculadora-solar-v1";

const urlsToCache = [
  "/calculadora_solar/",
  "/calculadora_solar/index.html",
  "/calculadora_solar/manifest.json"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        return response || fetch(event.request);
      })
  );
});
