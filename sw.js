// Service worker for Phone Mockup Studio — offline app shell + on-demand asset caching.
// Bump CACHE when any precached file changes so old copies are evicted.
const CACHE = "phone-mockup-studio-v70";
const PRECACHE = [
    "./",
    "./index.html",
    "./manifest.webmanifest",
    "./default-screenshot.jpg",
    "./icon-192.png",
    "./icon-512.png",
    "./icon-maskable-512.png",
    "./apple-touch-icon.png"
];

self.addEventListener("install", (e) => {
    e.waitUntil(
        caches.open(CACHE).then((c) => c.addAll(PRECACHE)).then(() => self.skipWaiting())
    );
});

self.addEventListener("activate", (e) => {
    e.waitUntil(
        caches
            .keys()
            .then((keys) =>
                Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)))
            )
            .then(() => self.clients.claim())
    );
});

// Cache-first, then network; successful GETs (incl. big .glb models + CDN Three.js) are cached on demand.
self.addEventListener("fetch", (e) => {
    if (e.request.method !== "GET") return;
    e.respondWith(
        caches.match(e.request).then(
            (hit) =>
                hit ||
                fetch(e.request)
                    .then((res) => {
                        if (res.ok && res.type !== "opaque") {
                            const copy = res.clone();
                            caches.open(CACHE).then((c) => c.put(e.request, copy));
                        }
                        return res;
                    })
                    .catch(() => hit)
        )
    );
});
