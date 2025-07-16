import React from 'react';
import { Card } from '@/components/ui/card';
import { LucideIcon } from 'lucide-react';

interface ContactCardProps {
  icon: LucideIcon;
  title: string;
  items: string[];
  subtitle?: string;
  iconColor?: string;
  animationDelay?: number;
}

export const ContactCard: React.FC<ContactCardProps> = ({
  icon: Icon,
  title,
  items,
  subtitle,
  iconColor = 'text-emerald-500',
  animationDelay = 0
}) => {
  const getIconBgColor = () => {
    if (iconColor.includes('emerald')) return 'bg-emerald-500/20';
    if (iconColor.includes('blue')) return 'bg-blue-500/20';
    if (iconColor.includes('purple')) return 'bg-purple-500/20';
    if (iconColor.includes('orange')) return 'bg-orange-500/20';
    return 'bg-slate-500/20';
  };

  return (
    <Card 
      className="p-4 sm:p-6 md:p-8 bg-slate-800/10 backdrop-blur-xl border border-slate-700/20 hover:border-slate-600/40 transition-all duration-500 animate-fade-in-left"
      style={{ animationDelay: `${animationDelay}ms` }}
    >
      <div className="flex items-center space-x-3 md:space-x-4 mb-3 md:mb-4 lg:mb-6">
        <div className={`p-2 md:p-3 ${getIconBgColor()} rounded-xl`}>
          <Icon className={`h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 ${iconColor}`} />
        </div>
        <h3 className="text-base sm:text-lg md:text-2xl font-semibold text-white">
          {title}
        </h3>
      </div>
      <div className="space-y-1 md:space-y-2">
        {items.map((item, index) => (
          <p key={index} className="text-sm sm:text-base md:text-lg text-slate-300">
            {item}
          </p>
        ))}
        {subtitle && (
          <p className="text-slate-400 text-xs sm:text-sm md:text-base">
            {subtitle}
          </p>
        )}
      </div>
    </Card>
  );
};
