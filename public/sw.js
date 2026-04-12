self.addEventListener('install', (e) => {
  console.log('[Service Worker] Installed');
});
self.addEventListener('fetch', (e) => {
  // Basic pass-through to satisfy PWA install requirements
});
