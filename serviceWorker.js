const staticFunkos = "dev-funko-site-v2"; // Cambiado el nombre de la caché

const assets = [
    "/",
    "/index.html",
    "/css/styles.css",
    "/js/app.js",
    "/images/Python.png",
    "/images/c.png",
    "/images/css.png",
    "/images/Java2.jpg",
    "/images/Flutter.png",
    "/images/py.webp",
    "/images/go.png"
];

async function preCache() {
    const cache = await caches.open(staticFunkos);
    return cache.addAll(assets);
}

self.addEventListener("install", installEvent => {
    installEvent.waitUntil(preCache().then(() => self.skipWaiting()));
});

async function cacheFirst(request) {
    const cacheResponse = await caches.match(request);

    if (cacheResponse) {
        return cacheResponse;
    }

    try {
        const networkResponse = await fetch(request);

        if (networkResponse.ok) {
            const cache = await caches.open(staticFunkos);
            cache.put(request, networkResponse.clone());
        }

        return networkResponse;
    } catch (error) {
        return caches.match(request) || Response.error();
    }
}

self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(cacheFirst(fetchEvent.request));
});

self.addEventListener("activate", activateEvent => {
    activateEvent.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cacheName => {
                    if (cacheName !== staticFunkos) {
                        return caches.delete(cacheName);
                    }
                })
            );
        }).then(() => self.clients.claim())
    );
});

if ("serviceWorker" in navigator) {
    window.addEventListener("load", function() {
        navigator.serviceWorker.register("/serviceWorker.js")
            .then(res => console.log("Service Worker registrado satisfactoriamente"))
            .catch(err => console.log("No se pudo registrar el Service Worker", err));
    });
}
