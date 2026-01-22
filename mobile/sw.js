self.addEventListener("install", e => {
    e.waitUntil(
        caches.open("metro-v1").then(cache =>
        cache.addAll([
            "/Cairo-metro/",
            "/Cairo-metro/index.html",
            "/Cairo-metro/css/main.css",
            "/Cairo-metro/app.js"
        ])
        )
    );
});




if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("/Cairo-metro/mobile/sw.js");
}
