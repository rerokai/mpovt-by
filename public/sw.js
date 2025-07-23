// Service Worker для кэширования изображений
const CACHE_NAME = 'mpovt-images-v1';
const IMAGES_TO_CACHE = [
  // Логотипы
  '/imgs/logos/mpovt.png',
  '/imgs/logos/freakstudio-transparent.svg',
  '/imgs/logos/freakstudio-light.svg',
  '/imgs/logos/H-transparent.svg',
  '/imgs/logos/H-default.svg',
  '/placeholder.svg',
  
  // Главная страница - приоритетные продукты
  '/imgs/mini-pc/h-top.jpg',
  '/imgs/laptops/h-book-pro.jpg',
  '/imgs/displays/h-monitor.jpg',
  '/imgs/ssd/h-storage.jpg',
  
  // Ноутбуки
  '/imgs/laptops/p1.png',
  '/imgs/laptops/p2.png',
  
  // Мониторы
  '/imgs/displays/A7_03503-min.jpg',
  '/imgs/displays/A7_03508-min.jpg',
  '/imgs/displays/A7_03511-min.jpg',
  '/imgs/displays/A7_03513-min.jpg',
  '/imgs/displays/A7_03517-min.png',
  
  // Компьютеры
  '/imgs/mini-pc/h-top 1.jpg',
  '/imgs/mini-pc/H-top3.jpg',
  '/imgs/mini-pc/H-top4.jpg',
  '/imgs/mini-pc/H-top5-nobg.png',
  
  // Сотрудники
  '/imgs/workers/elena_kononovich.jpg'
];

// Установка Service Worker и кэширование ресурсов
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Opened cache');
        return cache.addAll(IMAGES_TO_CACHE);
      })
      .catch((error) => {
        console.warn('Cache installation failed:', error);
      })
  );
});

// Перехват запросов и возврат из кэша
self.addEventListener('fetch', (event) => {
  // Кэшируем только изображения
  if (event.request.destination === 'image' || 
      event.request.url.includes('/imgs/') || 
      event.request.url.includes('.svg') ||
      event.request.url.includes('.png') ||
      event.request.url.includes('.jpg') ||
      event.request.url.includes('.jpeg')) {
    
    event.respondWith(
      caches.match(event.request)
        .then((response) => {
          // Возвращаем из кэша если есть
          if (response) {
            return response;
          }
          
          // Иначе загружаем из сети и кэшируем
          return fetch(event.request)
            .then((response) => {
              // Проверяем что ответ валидный
              if (!response || response.status !== 200 || response.type !== 'basic') {
                return response;
              }
              
              // Клонируем ответ для кэша
              const responseToCache = response.clone();
              
              caches.open(CACHE_NAME)
                .then((cache) => {
                  cache.put(event.request, responseToCache);
                });
              
              return response;
            })
            .catch(() => {
              // В случае ошибки сети возвращаем placeholder
              if (event.request.url.includes('/imgs/')) {
                return caches.match('/placeholder.svg');
              }
            });
        })
    );
  }
});

// Очистка старых кэшей
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
