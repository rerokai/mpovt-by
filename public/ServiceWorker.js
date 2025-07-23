// Оптимизированный Service Worker для кэширования
const CACHE_NAME = 'mpovt-assets-v2';
const STATIC_CACHE_NAME = 'mpovt-static-v2';

// Только критически важные ресурсы для немедленного кэширования
const CRITICAL_ASSETS = [
  '/imgs/logos/mpovt.png',
  '/imgs/logos/freakstudio-transparent.svg',
  '/imgs/logos/H-transparent.svg',
  '/placeholder.svg'
];

// Стратегия кэширования: stale-while-revalidate для изображений
self.addEventListener('install', (event) => {
  event.waitUntil(
    Promise.all([
      // Кэшируем только критические ресурсы при установке
      caches.open(STATIC_CACHE_NAME).then((cache) => {
        return cache.addAll(CRITICAL_ASSETS).catch((error) => {
          console.warn('Failed to cache critical assets:', error);
        });
      }),
      // Принудительная активация нового SW
      self.skipWaiting()
    ])
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    Promise.all([
      // Очищаем старые кэши
      caches.keys().then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            if (cacheName !== CACHE_NAME && cacheName !== STATIC_CACHE_NAME) {
              return caches.delete(cacheName);
            }
          })
        );
      }),
      // Берем контроль над всеми клиентами
      self.clients.claim()
    ])
  );
});

// Оптимизированная стратегия кэширования
self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);
  
  // Кэшируем только изображения и SVG
  if (event.request.destination === 'image' || 
      url.pathname.includes('/imgs/') || 
      url.pathname.endsWith('.svg') ||
      url.pathname.endsWith('.png') ||
      url.pathname.endsWith('.jpg') ||
      url.pathname.endsWith('.jpeg') ||
      url.pathname.endsWith('.webp')) {
    
    event.respondWith(
      // Stale-while-revalidate стратегия
      caches.open(CACHE_NAME).then(async (cache) => {
        const cachedResponse = await cache.match(event.request);
        
        // Фоновое обновление кэша
        const fetchPromise = fetch(event.request).then((response) => {
          if (response.ok) {
            cache.put(event.request, response.clone());
          }
          return response;
        }).catch(() => {
          // Возвращаем placeholder при ошибке сети
          return cache.match('/placeholder.svg') || new Response('', { status: 404 });
        });
        
        // Возвращаем кэшированную версию немедленно, если есть
        return cachedResponse || fetchPromise;
      })
    );
  }
});
