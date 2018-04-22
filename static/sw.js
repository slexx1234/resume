'use strict';

importScripts('sw-toolbox.js');

toolbox.precache(['/', '/ru']);
toolbox.router.get('/*', toolbox.cacheFirst);

self.addEventListener('install', function(event) {
    self.skipWaiting();
});
