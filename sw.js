self.addEventListener("install", e => {
    e.waitUntil(
        caches.open("metro-v1").then(cache =>
        cache.addAll([
            "./",
            "./index.html",
            "./css/main.css"
        ])
        )
    );
});
