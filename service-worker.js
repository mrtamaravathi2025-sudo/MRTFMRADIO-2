self.addEventListener("install", event => {
  event.waitUntil(
    caches.open("mrtfm-cache").then(cache => {
      return cache.addAll([
        "index.html",
        "manifest.json"
      ]);
    })
  );
});
