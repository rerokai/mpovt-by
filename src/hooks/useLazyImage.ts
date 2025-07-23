import { useEffect, useRef, useState } from 'react';

interface UseLazyImageOptions {
  threshold?: number;
  rootMargin?: string;
  placeholder?: string;
}

export const useLazyImage = (
  src: string,
  options: UseLazyImageOptions = {}
) => {
  const {
    threshold = 0.1,
    rootMargin = '50px',
    placeholder = '/placeholder.svg'
  } = options;

  const [imageSrc, setImageSrc] = useState<string>(placeholder);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isError, setIsError] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const imgElement = imgRef.current;
    if (!imgElement || !src) return;

    // Проверяем поддержку Intersection Observer
    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              // Предзагружаем изображение
              const image = new Image();
              
              image.onload = () => {
                setImageSrc(src);
                setIsLoaded(true);
                setIsError(false);
              };
              
              image.onerror = () => {
                setIsError(true);
                setImageSrc(placeholder);
              };
              
              image.src = src;
              observer.unobserve(imgElement);
            }
          });
        },
        {
          threshold,
          rootMargin
        }
      );

      observer.observe(imgElement);

      return () => {
        observer.unobserve(imgElement);
      };
    } else {
      // Fallback для браузеров без Intersection Observer
      setImageSrc(src);
    }
  }, [src, threshold, rootMargin, placeholder]);

  return {
    ref: imgRef,
    src: imageSrc,
    isLoaded,
    isError
  };
};
