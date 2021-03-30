importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.1.1/workbox-sw.js');

// This will trigger the importScripts() for workbox.strategies and its dependencies:
workbox.loadModule('workbox-strategies');

self.addEventListener('fetch', (event) => {
  if (event.request.url.endsWith('.png')) {
    // Referencing workbox.strategies will now work as expected.
    const cacheFirst = new workbox.strategies.CacheFirst();
    event.respondWith(cacheFirst.handle({request: event.request}));
  }
});

workbox.routing.registerRoute(
    ({request}) => request.destination === 'image',
    new workbox.strategies.CacheFirst()
  );

// Updated offline detection logic
// That the installed service worker fetch event returns an HTTP 200 status code (indicating a successful fetch) in simulated offline mode.