if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/service-worker.js').then(reg => {
    console.log('service worker register success')
  }).catch(e => {
    console.error('Error during service worker registration:', e)
  })
}
