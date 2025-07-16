import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, LucideIcon } from 'lucide-react';

interface ProductCardProps {
  title: string;
  description: string;
  image?: string;
  icon?: LucideIcon;
  link: string;
  variant?: 'primary' | 'secondary' | 'compact';
  features?: string[];
  className?: string;
  animationDelay?: number;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  title,
  description,
  image,
  icon: Icon,
  link,
  variant = 'primary',
  features = [],
  className = '',
  animationDelay = 0
}) => {
  const getVariantStyles = () => {
    switch (variant) {
      case 'primary':
        return 'group overflow-hidden hover:shadow-2xl transition-all duration-500 glass-card flex flex-col h-full bg-emerald-900/20 border-emerald-700/30 hover:scale-105';
      case 'secondary':
        return 'p-6 bg-slate-800/20 backdrop-blur-sm border-slate-700/30 hover:border-slate-600/50 transition-all duration-300 hover:scale-105';
      case 'compact':
        return 'p-4 bg-slate-800/10 backdrop-blur-xl border border-slate-700/20 hover:border-slate-600/40 transition-all duration-500';
      default:
        return 'group overflow-hidden hover:shadow-2xl transition-all duration-500 glass-card flex flex-col h-full';
    }
  };

  return (
    <Card 
      className={`${getVariantStyles()} animate-fade-in-up ${className}`}
      style={{ animationDelay: `${animationDelay}ms` }}
    >
      {image && (
        <div className="aspect-video bg-gradient-to-br from-emerald-100/20 to-teal-100/20 relative overflow-hidden">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          {Icon && (
            <div className="absolute bottom-2 sm:bottom-3 md:bottom-4 left-2 sm:left-3 md:left-4">
              <Icon className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 lg:h-8 lg:w-8 text-white" />
            </div>
          )}
        </div>
      )}
      
      <div className="p-3 sm:p-4 md:p-6 flex flex-col flex-grow">
        <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold mb-2 group-hover:text-emerald-400 transition-colors text-white">
          {title}
        </h3>
        <p className="text-emerald-200 mb-3 md:mb-4 text-xs sm:text-sm md:text-base flex-grow">
          {description}
        </p>
        
        {features.length > 0 && (
          <div className="mb-4 space-y-1">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-2">
                <div className="w-2 h-2 bg-emerald-400 rounded-full" />
                <span className="text-white text-xs">{feature}</span>
              </div>
            ))}
          </div>
        )}
        
        <Button 
          asChild 
          size="sm" 
          className="w-full mt-auto text-xs sm:text-sm bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/30 backdrop-blur-sm text-white transition-all duration-300 hover:shadow-lg"
        >
          <Link to={link}>
            Подробнее
            <ArrowRight className="ml-2 h-3 w-3 sm:h-4 sm:w-4" />
          </Link>
        </Button>
      </div>
    </Card>
  );
};
