importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.1.1/workbox-sw.js');

const {registerRoute} = workbox.routing;
const {CacheFirst} = workbox.strategies;
const {CacheableResponse} = workbox.cacheableResponse;

registerRoute(
  ({request}) => request.destination === 'image',
  new CacheFirst({
    plugins: [
      new CacheableResponsePlugin({statuses: [0, 200]})
    ],
  })
);

// Updated offline detection logic
// That the installed service worker fetch event returns an HTTP 200 status code (indicating a successful fetch) in simulated offline mode.