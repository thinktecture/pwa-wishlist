self.addEventListener('message', (event) => {
  console.info('[ServiceWorker] message received:', event.data);
  self.clients.matchAll().then(swClients => {
    swClients.forEach(client => {
      client.postMessage('Message from ServiceWorker.');
    });
  });
});

self.addEventListener('sync', event => {
  console.info('[ServiceWorker] Sync request received!');
  // TODO: Sync with server
  // INFO: Service Worker has no access to synchronous APIs like LocalStorage
  // Use IndexedDB or postMessage
});

self.addEventListener('push', event => {
  console.log('[Service Worker] Push Received.');

  const title = 'PWA Wishlist';
  const options = {
    body: 'Notification received',
    icon: 'assets/launcher-icon-144.png',
  };

  event.waitUntil(self.registration.showNotification(title, options));
});

self.addEventListener('notificationclick', event => {
  const rootUrl = new URL('/', location).href;
  event.notification.close();
  event.waitUntil(
    clients.matchAll().then(matchedClients => {
      for (let client of matchedClients) {
        if (client.url === rootUrl) {
          return client.focus();
        }
      }
      return clients.openWindow('/');
    })
  );
});
