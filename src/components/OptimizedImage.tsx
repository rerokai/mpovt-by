import React from 'react';
import { useLazyImage } from '../hooks/useLazyImage';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  placeholder?: string;
  onLoad?: () => void;
  onError?: () => void;
}

export const OptimizedImage = ({
  src,
  alt,
  className = '',
  placeholder = '/placeholder.svg',
  onLoad,
  onError
}: OptimizedImageProps) => {
  const { ref, src: imageSrc, isLoaded, isError } = useLazyImage(src, { placeholder });

  const handleLoad = () => {
    onLoad?.();
  };

  const handleError = () => {
    onError?.();
  };

  return (
    <img
      ref={ref}
      src={imageSrc}
      alt={alt}
      className={`${className} ${isLoaded ? 'opacity-100' : 'opacity-80'} transition-opacity duration-300`}
      onLoad={handleLoad}
      onError={handleError}
      loading="lazy"
      decoding="async"
    />
  );
};
