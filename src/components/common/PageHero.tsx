import React from 'react';
import { AnimatedBackground } from './AnimatedBackground';

interface PageHeroProps {
  title: string;
  subtitle?: string;
  description?: string;
  className?: string;
  backgroundVariant?: 'default' | 'hero' | 'section';
}

export const PageHero: React.FC<PageHeroProps> = ({
  title,
  subtitle,
  description,
  className = '',
  backgroundVariant = 'default'
}) => {
  return (
    <section className={`pt-40 md:pt-44 lg:pt-48 pb-12 md:pb-16 lg:pb-20 px-4 text-center relative overflow-hidden bg-black ${className}`}>
      <AnimatedBackground variant={backgroundVariant} />
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto animate-fade-in">
          {subtitle && (
            <p className="text-lg md:text-xl text-slate-400 mb-4">
              {subtitle}
            </p>
          )}
          <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-8xl font-black mb-6 md:mb-8 text-white/95 leading-tight">
            {title}
          </h1>
          {description && (
            <p className="text-lg md:text-xl xl:text-2xl text-white/70 mb-6 md:mb-8">
              {description}
            </p>
          )}
        </div>
      </div>
    </section>
  );
};
