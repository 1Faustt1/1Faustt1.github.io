self.addEventListener('install', () => {
    console.log('Service Worker installed');
});

self.addEventListener('fetch', event => {
    // Можно добавить кэширование позже
});
