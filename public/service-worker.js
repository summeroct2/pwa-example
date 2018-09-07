const cacheName = 'pwa-douban-opening'
const cacheFiles = [
  '/',
  '/0.js',
  '/app.js'
]

self.addEventListener('install', e => {
  e.waitUntil(caches.open(cacheName).then(cache => {
    return cache.addAll(cacheFiles)
  }))
})
