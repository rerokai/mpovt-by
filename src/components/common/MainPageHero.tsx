import React from 'react';
import { ChevronDown } from 'lucide-react';
import { AnimatedBackground } from './AnimatedBackground';

interface MainPageHeroProps {
  logoSrc: string;
  logoAlt: string;
  subtitle: string;
  scrollIndicatorText?: string;
  className?: string;
}

export const MainPageHero: React.FC<MainPageHeroProps> = ({
  logoSrc,
  logoAlt,
  subtitle,
  scrollIndicatorText = "Прокрутите вниз",
  className = ""
}) => {
  return (
    <section className={`pt-40 md:pt-44 lg:pt-48 pb-12 md:pb-16 lg:pb-20 px-4 text-center relative overflow-hidden bg-black ${className}`}>
      {/* Enhanced smooth animated background extending to next section */}
      <div className="absolute inset-0 overflow-hidden" style={{ height: '200%' }}>
        <div className="absolute top-1/4 left-1/4 w-32 h-32 md:w-64 md:h-64 bg-gradient-to-r from-cyan-500/30 to-blue-500/30 rounded-full blur-3xl opacity-0 animate-pulse" style={{ animationDuration: '8s', animationFillMode: 'forwards', animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/6 right-1/4 w-48 h-48 md:w-96 md:h-96 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-full blur-3xl opacity-0 animate-pulse" style={{ animationDelay: '3s', animationDuration: '10s', animationFillMode: 'forwards' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 md:w-128 md:h-128 bg-gradient-to-r from-emerald-500/30 to-teal-500/30 rounded-full blur-3xl opacity-0 animate-pulse" style={{ animationDelay: '2s', animationDuration: '12s', animationFillMode: 'forwards' }}></div>
        <div className="absolute top-3/4 left-1/3 w-40 h-40 md:w-80 md:h-80 bg-gradient-to-r from-yellow-500/30 to-orange-500/30 rounded-full blur-3xl opacity-0 animate-pulse" style={{ animationDelay: '4s', animationDuration: '9s', animationFillMode: 'forwards' }}></div>
        <div className="absolute bottom-1/6 right-1/3 w-56 h-56 md:w-112 md:h-112 bg-gradient-to-r from-red-500/30 to-rose-500/30 rounded-full blur-3xl opacity-0 animate-pulse" style={{ animationDelay: '5s', animationDuration: '11s', animationFillMode: 'forwards' }}></div>
        <div className="absolute bottom-0 left-1/4 w-72 h-72 md:w-144 md:h-144 bg-gradient-to-r from-indigo-500/30 to-purple-500/30 rounded-full blur-3xl opacity-0 animate-pulse" style={{ animationDelay: '6s', animationDuration: '14s', animationFillMode: 'forwards' }}></div>
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <div className="mb-8 md:mb-12 flex justify-center">
            <img 
              src={logoSrc}
              alt={logoAlt}
              className="h-24 sm:h-32 md:h-40 lg:h-48 xl:h-56 w-auto opacity-95 hover:opacity-100 transition-opacity duration-300"
            />
          </div>
          <p className="text-lg md:text-xl xl:text-2xl text-white/50 mb-6 md:mb-8" style={{ animationDelay: '200ms' }}>
            {subtitle}
          </p>
          
          {/* Animated mouse scroll indicator */}
          <div className="flex flex-col items-center mt-12 md:mt-16" style={{ animationDelay: '600ms' }}>
            <div className="animate-bounce">
              <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
                <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
              </div>
            </div>
            <p className="text-white/40 text-sm mt-3 animate-pulse">{scrollIndicatorText}</p>
            <ChevronDown className="w-5 h-5 text-white/30 mt-2 animate-bounce" style={{ animationDelay: '1s' }} />
          </div>
        </div>
      </div>
    </section>
  );
};
