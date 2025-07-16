import React, { useRef, useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, Play, Pause, Volume2, VolumeX } from 'lucide-react';
import { AnimatedBackground } from './AnimatedBackground';
import OptimizedVideoPlayer from '@/components/OptimizedVideoPlayer';

interface PriorityProduct {
  title: string;
  subtitle: string;
  description: string;
  fullDescription: string;
  videoUrl: string;
  image: string;
  link: string;
  gradient: string;
  bgGradient: string;
  borderHover: string;
  buttonShine: string;
}

interface PriorityProductsSectionProps {
  title: string;
  subtitle: string;
  products: PriorityProduct[];
  className?: string;
}

export const PriorityProductsSection: React.FC<PriorityProductsSectionProps> = ({
  title,
  subtitle,
  products,
  className = ""
}) => {
  // Функция для извлечения цвета из градиента
  const extractButtonColor = (gradient: string) => {
    if (gradient.includes('blue')) return 'from-blue-500 via-blue-600 to-cyan-500';
    if (gradient.includes('emerald')) return 'from-emerald-500 via-emerald-600 to-teal-500';
    if (gradient.includes('purple')) return 'from-purple-500 via-purple-600 to-pink-500';
    if (gradient.includes('red')) return 'from-red-500 via-red-600 to-orange-500';
    return 'from-gray-500 via-gray-600 to-gray-500';
  };

  const extractHoverColor = (gradient: string) => {
    if (gradient.includes('blue')) return 'hover:from-blue-600 hover:via-blue-700 hover:to-cyan-600';
    if (gradient.includes('emerald')) return 'hover:from-emerald-600 hover:via-emerald-700 hover:to-teal-600';
    if (gradient.includes('purple')) return 'hover:from-purple-600 hover:via-purple-700 hover:to-pink-600';
    if (gradient.includes('red')) return 'hover:from-red-600 hover:via-red-700 hover:to-orange-600';
    return 'hover:from-gray-600 hover:via-gray-700 hover:to-gray-600';
  };

  return (
    <section className={`py-16 md:py-20 bg-gradient-to-b from-black via-slate-900/50 to-black relative overflow-hidden shadow-2xl ${className}`}>
      <AnimatedBackground variant="hero" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
            <span className="bg-gradient-to-r from-amber-200 via-orange-300 to-amber-200 bg-clip-text text-transparent">
              {title}
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        </div>

        <div className="space-y-8">
          {products.map((product, index) => (
            <div 
              key={index} 
              className="w-full animate-fade-in-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <Card className={`group overflow-hidden bg-gradient-to-br ${product.bgGradient} backdrop-blur-xl border border-slate-700/20 ${product.borderHover} transition-all duration-700 mx-8 md:mx-12 lg:mx-16 hover:shadow-2xl hover:shadow-slate-900/50`}>
                <div className="grid lg:grid-cols-2 gap-0 min-h-[20vh] h-[315px]">
                  {/* Video Section */}
                  <div className="relative overflow-hidden bg-slate-900">
                    <OptimizedVideoPlayer
                      src={product.videoUrl}
                      placeholder={product.image}
                      className="transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  
                  {/* Content Section */}
                  <div className="p-6 lg:p-8 flex flex-col justify-center bg-gradient-to-br from-slate-800/5 to-slate-900/5 backdrop-blur-lg">
                    <div className="flex items-center space-x-3 mb-2">
                      <h3 className="text-2xl lg:text-3xl font-bold text-white drop-shadow-lg">
                        {product.title}
                      </h3>
                      <span className="text-lg lg:text-xl text-slate-400 font-medium">
                        {product.subtitle}
                      </span>
                    </div>

                    <p className="text-slate-300 leading-relaxed mb-8 text-sm lg:text-base">
                      {product.fullDescription}
                    </p>
                    
                    <Button 
                      asChild 
                      size="lg" 
                      className={`relative overflow-hidden bg-gradient-to-r ${extractButtonColor(product.gradient)} ${extractHoverColor(product.gradient)} text-white font-medium shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-95`}
                    >
                      <Link to={product.link} className="flex items-center">
                        Подробнее
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
