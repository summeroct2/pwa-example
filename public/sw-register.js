if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/service-worker.js?v=20180904153513').then(reg => {
    reg.onupdatefound = function() {
      var installingWorker = reg.installing;
      installingWorker.onstatechange = function() {
        switch (installingWorker.state) {
          case 'installed':
            if (navigator.serviceWorker.controller) {
              var event = document.createEvent('Event');
              event.initEvent('sw.update', true, true);
              window.dispatchEvent(event)
            }
            break;
        }
      }
    }
  }).catch(e => {
    console.error('Error during service worker registration:', e)
  })
}