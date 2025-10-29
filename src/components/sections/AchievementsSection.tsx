import React from 'react';
import { Card } from '@/components/ui/card';

interface Achievement {
  number: string;
  label: string;
  description: string;
}

interface AchievementsSectionProps {
  title: string;
  subtitle: string;
  achievements: Achievement[];
  className?: string;
}

export const AchievementsSection: React.FC<AchievementsSectionProps> = ({
  title,
  subtitle,
  achievements,
  className = ""
}) => {
  return (
    <section className={`py-16 md:py-20 px-4 bg-black relative ${className}`}>
      {/* Moving animated background spheres with orange/red colors */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-32 h-32 md:w-64 md:h-64 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-full blur-3xl animate-pulse moving-sphere-7" 
             style={{ 
               animationDuration: '8s', 
               left: '25%', 
               top: '25%'
             }}></div>
        <div className="absolute w-48 h-48 md:w-96 md:h-96 bg-gradient-to-r from-red-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse moving-sphere-8" 
             style={{ 
               animationDelay: '3s', 
               animationDuration: '10s',
               right: '25%',
               bottom: '33%'
             }}></div>
        <div className="absolute w-64 h-64 md:w-128 md:h-128 bg-gradient-to-r from-pink-500/20 to-orange-500/20 rounded-full blur-3xl animate-pulse moving-sphere-9" 
             style={{ 
               animationDelay: '2s', 
               animationDuration: '12s',
               left: '50%',
               top: '50%'
             }}></div>
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 bg-clip-text text-transparent">
            {title}
          </h2>
          <p className="text-lg md:text-xl text-orange-100 max-w-3xl mx-auto mt-6">
            {subtitle}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {achievements.map((achievement, index) => (
            <Card 
              key={index} 
              className="text-center p-6 md:p-8 glass-card hover:shadow-xl transition-all duration-500 hover:scale-105 bg-gradient-to-br from-orange-900/30 to-pink-900/30 border-orange-700/30"
            >
              <div className="text-2xl md:text-4xl font-bold text-white mb-2">{achievement.number}</div>
              <div className="text-base md:text-lg font-semibold mb-2 text-red-400">{achievement.label}</div>
              <div className="text-orange-200 text-sm">{achievement.description}</div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
