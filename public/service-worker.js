const cacheName = 'pwa-douban-opening'
const cacheFiles = [
  '/',
  '/index.html',
  '/0.js',
  '/app.js'
]

self.addEventListener('install', e => {
  e.waitUntil(caches.open(cacheName).then(cache => {
    console.log('files cache success', cacheFiles)
    return cache.addAll(cacheFiles)
  }))
})

self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(cacheName => {
    console.log('激活成功')
  }))
})

self.addEventListener('fetch', e => {
  e.respondWith(caches.match(e.request).then(res => {
    if (res) {
      console.log('service worker 匹配并读取缓存')
      return res
    }
    return fetch(e.request)
  }))
})
