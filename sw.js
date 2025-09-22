self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open("gastos-app").then((cache) => cache.addAll([
      "index.html", "app.js", "style.css", "manifest.json", "icon.png"
    ]))
  );
});

self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request))
  );
});