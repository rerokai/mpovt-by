import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface ProductOverviewProps {
  title: string;
  description: string;
  features: string[];
  highlighted?: boolean;
  variant?: 'primary' | 'secondary' | 'outline' | 'gradient';
  animationDelay?: number;
}

export const ProductOverview: React.FC<ProductOverviewProps> = ({
  title,
  description,
  features,
  highlighted = false,
  variant = 'primary',
  animationDelay = 0
}) => {
  const getVariantStyles = () => {
    switch (variant) {
      case 'primary':
        return {
          card: 'bg-slate-800/10 backdrop-blur-sm border-slate-700/20 hover:border-slate-600/40',
          titleGradient: 'from-emerald-400 to-teal-400',
          badge: 'bg-emerald-500/20 text-emerald-400 border-emerald-400/30'
        };
      case 'secondary':
        return {
          card: 'bg-slate-800/20 backdrop-blur-sm border-slate-700/30 hover:border-slate-600/50',
          titleGradient: 'from-blue-400 to-cyan-400',
          badge: 'bg-blue-500/20 text-blue-400 border-blue-400/30'
        };
      case 'outline':
        return {
          card: 'bg-transparent border-2 border-slate-700/50 hover:border-slate-600/70',
          titleGradient: 'from-purple-400 to-pink-400',
          badge: 'bg-purple-500/20 text-purple-400 border-purple-400/30'
        };
      case 'gradient':
        return {
          card: 'bg-gradient-to-br from-slate-800/20 to-slate-900/20 backdrop-blur-sm border-slate-700/30 hover:border-slate-600/50',
          titleGradient: 'from-orange-400 to-yellow-400',
          badge: 'bg-orange-500/20 text-orange-400 border-orange-400/30'
        };
      default:
        return {
          card: 'bg-slate-800/10 backdrop-blur-sm border-slate-700/20 hover:border-slate-600/40',
          titleGradient: 'from-emerald-400 to-teal-400',
          badge: 'bg-emerald-500/20 text-emerald-400 border-emerald-400/30'
        };
    }
  };

  const styles = getVariantStyles();

  return (
    <Card 
      className={`p-8 ${styles.card} transition-all duration-300 animate-fade-in-up ${highlighted ? 'ring-2 ring-emerald-500/20' : ''}`}
      style={{ animationDelay: `${animationDelay}ms` }}
    >
      <div className="text-center">
        <h3 className={`text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r ${styles.titleGradient} bg-clip-text text-transparent`}>
          {title}
        </h3>
        <p className="text-slate-300 text-lg mb-6">
          {description}
        </p>
        <div className="flex flex-wrap justify-center gap-2">
          {features.map((feature, index) => (
            <Badge 
              key={index} 
              variant="outline" 
              className={`${styles.badge} text-sm`}
            >
              {feature}
            </Badge>
          ))}
        </div>
      </div>
    </Card>
  );
};
