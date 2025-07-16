import React from 'react';
import { Card } from '@/components/ui/card';
import { LucideIcon } from 'lucide-react';

interface IconCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'gradient';
  color?: {
    icon: string;
    bg: string;
    text?: string;
  };
  animationDelay?: number;
  className?: string;
}

export const IconCard: React.FC<IconCardProps> = ({
  icon: Icon,
  title,
  description,
  variant = 'primary',
  color,
  animationDelay = 0,
  className = ''
}) => {
  const getVariantStyles = () => {
    switch (variant) {
      case 'primary':
        return 'bg-slate-800/20 backdrop-blur-sm border-slate-700/30 hover:border-slate-600/50 transition-all duration-300 hover:scale-105';
      case 'secondary':
        return 'bg-slate-800/10 backdrop-blur-xl border border-slate-700/20 hover:border-slate-600/40 transition-all duration-500';
      case 'outline':
        return 'bg-white/5 backdrop-blur-xl border border-white/10 transition-all duration-300 hover:scale-105';
      case 'gradient':
        return 'glass-card bg-slate-900/20 border-slate-700/30 hover:shadow-xl transition-all duration-500';
      default:
        return 'bg-slate-800/20 backdrop-blur-sm border-slate-700/30';
    }
  };

  const defaultColor = {
    icon: 'text-white',
    bg: 'bg-slate-800/40',
    text: 'text-white'
  };

  const cardColor = color || defaultColor;

  return (
    <Card
      className={`p-6 ${getVariantStyles()} animate-fade-in-up ${className}`}
      style={{ animationDelay: `${animationDelay}ms` }}
    >
      <div className="flex flex-col items-center text-center">
        <div className={`p-3 rounded-full ${cardColor.bg} mb-4`}>
          <Icon className={`w-8 h-8 ${cardColor.icon}`} />
        </div>
        <h3 className={`text-lg font-semibold mb-2 ${cardColor.text || 'text-white'}`}>
          {title}
        </h3>
        <p className="text-slate-300 text-sm">{description}</p>
      </div>
    </Card>
  );
};
