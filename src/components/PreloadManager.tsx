
import { useEffect, useState } from 'react';
import { LoaderCircle } from 'lucide-react';

interface PreloadManagerProps {
  children: React.ReactNode;
  onLoadingChange?: (isLoading: boolean) => void;
}

const PreloadManager = ({ children, onLoadingChange }: PreloadManagerProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);
  const [loadingStatus, setLoadingStatus] = useState('Инициализация...');

  useEffect(() => {
    const preloadResources = async () => {
      // Регистрируем Service Worker для кэширования
      if ('serviceWorker' in navigator) {
        try {
          const registration = await navigator.serviceWorker.register('/sw.js');
          console.log('SW registered: ', registration);
        } catch (error) {
          console.warn('SW registration failed: ', error);
        }
      }
      
      setLoadingStatus('Кеширую изображения...');
      
      // Все изображения используемые на сайте
      const imagesToPreload = [
        // Логотипы
        '/imgs/logos/mpovt.png',
        
        // SVG логотипы
        '/imgs/logos/freakstudio-transparent.svg',
        '/imgs/logos/freakstudio-light.svg',
        '/imgs/logos/H-transparent.svg',
        '/imgs/logos/H-default.svg',
        '/placeholder.svg',
        
        // Главная страница - приоритетные продукты
        '/imgs/mini-pc/H-top.jpg',
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
        '/imgs/mini-pc/H-top1.jpg',
        '/imgs/mini-pc/H-top3.jpg',
        '/imgs/mini-pc/H-top4.jpg',
        '/imgs/mini-pc/H-top5-nobg.png',
        
        // Сотрудники
        '/imgs/workers/elena_kononovich.jpg'
      ];

      // Видео файлы
      const videosToPreload = [
        '/videos/h-book.mp4',
        '/videos/multi-render.mp4',
        '/videos/h-tab.mp4'
      ];

      // Предзагрузка изображений с принудительным кэшированием
      setLoadingStatus('Кеширую изображения...');
      const imagePromises = imagesToPreload.map((src) => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          
          // Устанавливаем кэширование
          img.crossOrigin = 'anonymous';
          
          img.onload = () => {
            // Принудительно добавляем в кэш браузера
            try {
              const canvas = document.createElement('canvas');
              const ctx = canvas.getContext('2d');
              if (ctx) {
                canvas.width = img.width;
                canvas.height = img.height;
                ctx.drawImage(img, 0, 0);
                // Это заставляет браузер закэшировать изображение
                canvas.toDataURL();
              }
            } catch (e) {
              // Игнорируем ошибки CORS, изображение все равно должно быть предзагружено
            }
            resolve(img);
          };
          
          img.onerror = (error) => {
            console.warn(`Failed to preload image: ${src}`, error);
            resolve(null); // Продолжаем даже при ошибке
          };
          
          // Добавляем параметры для предотвращения кэширования проблем
          const timestamp = Date.now();
          img.src = src.includes('?') ? `${src}&_t=${timestamp}` : `${src}?_t=${timestamp}`;
        });
      });

      // Предзагрузка видео
      setLoadingStatus('Кеширую видео...');
      const videoPromises = videosToPreload.map((src) => {
        return new Promise((resolve, reject) => {
          const video = document.createElement('video');
          video.onloadeddata = () => resolve(video);
          video.onerror = (error) => {
            console.warn(`Failed to preload video: ${src}`, error);
            resolve(null); // Продолжаем даже при ошибке
          };
          video.src = src;
          video.preload = "metadata"; // Загружаем только метаданные для экономии трафика
          video.load();
        });
      });

      // Добавляем link теги для критических ресурсов с агрессивным кэшированием
      setLoadingStatus('Оптимизирую ресурсы...');
      const criticalResources = [
        { href: '/imgs/logos/mpovt.png', as: 'image' },
        { href: '/imgs/logos/freakstudio-transparent.svg', as: 'image' },
        { href: '/imgs/logos/H-transparent.svg', as: 'image' },
        { href: '/placeholder.svg', as: 'image' },
        { href: '/imgs/mini-pc/H-top.jpg', as: 'image' },
        { href: '/imgs/laptops/h-book-pro.jpg', as: 'image' },
        { href: '/imgs/displays/h-monitor.jpg', as: 'image' },
        { href: '/imgs/ssd/h-storage.jpg', as: 'image' },
        { href: '/imgs/laptops/p1.png', as: 'image' },
        { href: '/imgs/laptops/p2.png', as: 'image' }
      ];

      criticalResources.forEach(resource => {
        // Создаем link для preload
        const link = document.createElement('link');
        link.rel = 'preload';
        link.href = resource.href;
        link.as = resource.as;
        link.crossOrigin = 'anonymous';
        document.head.appendChild(link);
        
        // Создаем дополнительный link для prefetch (для будущих страниц)
        const prefetchLink = document.createElement('link');
        prefetchLink.rel = 'prefetch';
        prefetchLink.href = resource.href;
        prefetchLink.crossOrigin = 'anonymous';
        document.head.appendChild(prefetchLink);
      });

      try {
        // Запускаем предзагрузку изображений и видео параллельно
        setLoadingStatus('Завершаю загрузку...');
        await Promise.all([...imagePromises, ...videoPromises]);
        
        // Дополнительно создаем невидимые img элементы для гарантированного кэширования
        setLoadingStatus('Финализирую кэш...');
        const hiddenContainer = document.createElement('div');
        hiddenContainer.style.position = 'absolute';
        hiddenContainer.style.top = '-9999px';
        hiddenContainer.style.left = '-9999px';
        hiddenContainer.style.opacity = '0';
        hiddenContainer.style.pointerEvents = 'none';
        hiddenContainer.id = 'hidden-preload-container';
        
        imagesToPreload.forEach(src => {
          const img = document.createElement('img');
          img.src = src;
          img.loading = 'eager';
          hiddenContainer.appendChild(img);
        });
        
        document.body.appendChild(hiddenContainer);
        
        // Минимальная длительность загрузки 2.5 секунды для UX
        setLoadingStatus('Готово!');
        setTimeout(() => {
          setFadeOut(true);
          onLoadingChange?.(false);
          // Дополнительная задержка для плавного исчезновения
          setTimeout(() => {
            setIsLoading(false);
            // Удаляем скрытый контейнер через 5 секунд
            setTimeout(() => {
              const container = document.getElementById('hidden-preload-container');
              if (container) {
                document.body.removeChild(container);
              }
            }, 5000);
          }, 600);
        }, 1500);
      } catch (error) {
        console.warn('Some resources failed to preload:', error);
        // Все равно завершаем загрузку даже при ошибках
        setLoadingStatus('Готово!');
        setTimeout(() => {
          setFadeOut(true);
          onLoadingChange?.(false);
          setTimeout(() => {
            setIsLoading(false);
          }, 600);
        }, 2500);
      }
    };

    preloadResources();

    // Очистка при размонтировании
    return () => {
      // Удаляем добавленные link теги
      const preloadLinks = document.querySelectorAll('link[rel="preload"], link[rel="prefetch"]') as NodeListOf<HTMLLinkElement>;
      preloadLinks.forEach(link => {
        if (link.href.includes('imgs/') || 
            link.href.includes('placeholder.svg') || 
            link.href.includes('lovable-uploads/')) {
          try {
            document.head.removeChild(link);
          } catch (error) {
            // Игнорируем ошибки если элемент уже удален
          }
        }
      });
    };
  }, [onLoadingChange]);

  if (isLoading) {
    return (
      <div 
        className={`fixed inset-0 z-50 bg-gradient-to-br from-slate-900 via-slate-800 to-black flex items-center justify-center transition-opacity duration-600 ${
          fadeOut ? 'opacity-0' : 'opacity-100'
        }`}
      >
        <div className="text-center space-y-6 animate-fade-in">
          {/* Логотип МПОВТ */}
          <div className="flex justify-center mb-6">
            <img 
              src="/imgs/logos/mpovt.png" 
              alt="ОАО МПОВТ" 
              className="h-32 w-auto object-contain opacity-90"
            />
          </div>
          
          {/* Индикатор загрузки */}
          <div className="flex justify-center">
            <LoaderCircle 
              size={48} 
              className="animate-spin text-white/80" 
            />
          </div>
          
          {/* Основной текст загрузки */}
          <p className="text-lg text-white/90 font-medium">
            Загрузка
          </p>
          
          {/* Статус процесса */}
          <p className="text-sm text-white/50 font-normal animate-pulse">
            {loadingStatus}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="animate-fade-in">
      {children}
    </div>
  );
};

export default PreloadManager;
