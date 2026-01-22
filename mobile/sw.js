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
    navigator.serviceWorker.register("/mobile/sw.js");
}




window.open(
    "https://www.google.com/maps/dir/?api=1&origin=محطة+أ&destination=محطة+ب&travelmode=transit",
    "_blank"
);
