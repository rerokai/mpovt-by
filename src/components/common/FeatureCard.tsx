import React from 'react';
import { Card } from '@/components/ui/card';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'gradient';
  animationDelay?: number;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({
  icon: Icon,
  title,
  description,
  variant = 'primary',
  animationDelay = 0
}) => {
  const getVariantStyles = () => {
    switch (variant) {
      case 'primary':
        return {
          card: 'bg-slate-800/10 backdrop-blur-sm border-slate-700/20 hover:border-slate-600/40',
          iconContainer: 'bg-gradient-to-r from-emerald-500/20 to-teal-500/20',
          icon: 'text-emerald-400'
        };
      case 'secondary':
        return {
          card: 'bg-slate-800/20 backdrop-blur-sm border-slate-700/30 hover:border-slate-600/50',
          iconContainer: 'bg-gradient-to-r from-blue-500/20 to-cyan-500/20',
          icon: 'text-blue-400'
        };
      case 'outline':
        return {
          card: 'bg-transparent border-2 border-slate-700/50 hover:border-slate-600/70',
          iconContainer: 'bg-gradient-to-r from-purple-500/20 to-pink-500/20',
          icon: 'text-purple-400'
        };
      case 'gradient':
        return {
          card: 'bg-gradient-to-br from-slate-800/20 to-slate-900/20 backdrop-blur-sm border-slate-700/30 hover:border-slate-600/50',
          iconContainer: 'bg-gradient-to-r from-orange-500/20 to-yellow-500/20',
          icon: 'text-orange-400'
        };
      default:
        return {
          card: 'bg-slate-800/10 backdrop-blur-sm border-slate-700/20 hover:border-slate-600/40',
          iconContainer: 'bg-gradient-to-r from-emerald-500/20 to-teal-500/20',
          icon: 'text-emerald-400'
        };
    }
  };

  const styles = getVariantStyles();

  return (
    <Card 
      className={`p-8 ${styles.card} transition-all duration-300 animate-fade-in-up`} 
      style={{ animationDelay: `${animationDelay}ms` }}
    >
      <div className="flex items-start space-x-4">
        <div className={`p-3 rounded-full ${styles.iconContainer} flex-shrink-0`}>
          <Icon className={`w-6 h-6 ${styles.icon}`} />
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
          <p className="text-slate-300">{description}</p>
        </div>
      </div>
    </Card>
  );
};
