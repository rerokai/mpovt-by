// Централизованная система управления медиаресурсами
export const MEDIA_ASSETS = {
  // Логотипы - критически важные для первой загрузки
  logos: {
    mpovt: '/imgs/logos/mpovt.png',
    freakstudioTransparent: '/imgs/logos/freakstudio-transparent.svg',
    freakstudioLight: '/imgs/logos/freakstudio-light.svg',
    hTransparent: '/imgs/logos/H-transparent.svg',
    hDefault: '/imgs/logos/H-default.svg',
    placeholder: '/placeholder.svg'
  },

  // Приоритетные продукты - показываются на главной странице
  priorityProducts: {
    miniPc: '/imgs/mini-pc/H-top.jpg',
    laptop: '/imgs/laptops/h-book-pro.jpg',
    monitor: '/imgs/displays/h-monitor.jpg',
    ssd: '/imgs/ssd/h-storage.jpg'
  },

  // Остальные изображения - загружаются по требованию
  laptops: {
    p1: '/imgs/laptops/p1.png',
    p2: '/imgs/laptops/p2.png'
  },

  displays: {
    a7_03503: '/imgs/displays/A7_03503-min.jpg',
    a7_03508: '/imgs/displays/A7_03508-min.jpg',
    a7_03511: '/imgs/displays/A7_03511-min.jpg',
    a7_03513: '/imgs/displays/A7_03513-min.jpg',
    a7_03517: '/imgs/displays/A7_03517-min.png'
  },

  computers: {
    hTop1: '/imgs/mini-pc/H-top1.jpg',
    hTop3: '/imgs/mini-pc/H-top3.jpg',
    hTop4: '/imgs/mini-pc/H-top4.jpg',
    hTop5: '/imgs/mini-pc/H-top5-nobg.png'
  },

  workers: {
    elenaKononovich: '/imgs/workers/elena_kononovich.jpg'
  },

  videos: {
    hBook: '/videos/h-book.mp4',
    multiRender: '/videos/multi-render.mp4',
    hTab: '/videos/h-tab.mp4'
  }
} as const;

// Функции для получения групп ресурсов
export const getLogoAssets = () => Object.values(MEDIA_ASSETS.logos);
export const getPriorityAssets = () => [
  ...Object.values(MEDIA_ASSETS.logos),
  ...Object.values(MEDIA_ASSETS.priorityProducts)
];
export const getAllImageAssets = () => [
  ...Object.values(MEDIA_ASSETS.logos),
  ...Object.values(MEDIA_ASSETS.priorityProducts),
  ...Object.values(MEDIA_ASSETS.laptops),
  ...Object.values(MEDIA_ASSETS.displays),
  ...Object.values(MEDIA_ASSETS.computers),
  ...Object.values(MEDIA_ASSETS.workers)
];
export const getVideoAssets = () => Object.values(MEDIA_ASSETS.videos);

// Типы для категорий ресурсов
export type AssetCategory = 'critical' | 'priority' | 'deferred';

// Конфигурация загрузки ресурсов
export const ASSET_LOADING_CONFIG = {
  critical: {
    // Критически важные ресурсы - загружаются немедленно
    assets: getLogoAssets(),
    strategy: 'preload' as const,
    priority: 'high' as const
  },
  priority: {
    // Приоритетные ресурсы - загружаются на главной странице
    assets: getPriorityAssets(),
    strategy: 'prefetch' as const,
    priority: 'medium' as const
  },
  deferred: {
    // Отложенные ресурсы - загружаются по требованию
    assets: getAllImageAssets(),
    strategy: 'lazy' as const,
    priority: 'low' as const
  }
};

// Утилитная функция для создания оптимизированного preload
export const createPreloadLink = (
  href: string, 
  as: 'image' | 'video' | 'document' = 'image',
  crossOrigin: boolean = false
): HTMLLinkElement => {
  const link = document.createElement('link');
  link.rel = 'preload';
  link.href = href;
  link.as = as;
  if (crossOrigin) {
    link.crossOrigin = 'anonymous';
  }
  return link;
};

// Утилитная функция для создания prefetch
export const createPrefetchLink = (href: string): HTMLLinkElement => {
  const link = document.createElement('link');
  link.rel = 'prefetch';
  link.href = href;
  return link;
};
