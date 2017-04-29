module.exports = {
  navigateFallback: '/index.html',
  stripPrefix: 'dist',
  root: 'dist',
  cacheId: 'pwa-wishlist',
  skipWaiting: true,
  maximumFileSizeToCacheInBytes: (1024000 * 5),
  staticFileGlobs: [
    'dist/index.html',
    'dist/**.js',
    'dist/**.css',
    'dist/**.woff',
    'dist/**.woff2',
    'dist/**.ttf',
    'dist/assets/**.*'
  ],
  importScripts: [
    'pwa-service-worker.js'
  ],
  runtimeCaching: [{
    urlPattern: /pwa-wishlist\.herokuapp\.com/,
    handler: 'cacheFirst'
  }]
};
