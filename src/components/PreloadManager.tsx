
import { useEffect, useState } from 'react';
import { Skeleton } from '@/components/ui/skeleton';

interface PreloadManagerProps {
  children: React.ReactNode;
}

const PreloadManager = ({ children }: PreloadManagerProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [resourcesLoaded, setResourcesLoaded] = useState(false);

  useEffect(() => {
    const preloadResources = async () => {
      const imagesToPreload = [
        '/lovable-uploads/70fca613-4992-4ede-98c2-f9c7e669d23e.png', // Logo
        // Добавьте другие критически важные изображения здесь
      ];

      const imagePromises = imagesToPreload.map((src) => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.onload = resolve;
          img.onerror = reject;
          img.src = src;
        });
      });

      try {
        await Promise.all(imagePromises);
        setResourcesLoaded(true);
        
        // Минимальное время загрузки для плавного UX
        setTimeout(() => {
          setIsLoading(false);
        }, 800);
      } catch (error) {
        console.warn('Some resources failed to preload:', error);
        setResourcesLoaded(true);
        setTimeout(() => {
          setIsLoading(false);
        }, 800);
      }
    };

    preloadResources();
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="text-center space-y-6">
          {/* Logo skeleton */}
          <div className="flex justify-center">
            <Skeleton className="h-16 w-32 rounded-lg bg-white/20" />
          </div>
          
          {/* Loading text */}
          <div className="space-y-2">
            <h2 className="text-2xl font-bold text-white animate-pulse">
              Загружаем ОАО МПОВТ
            </h2>
            <div className="flex justify-center space-x-1">
              <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
              <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
              <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
            </div>
          </div>
          
          {/* Progress bar */}
          <div className="w-64 h-1 bg-white/20 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    );
  }

  return <>{children}</>;
};

export default PreloadManager;
