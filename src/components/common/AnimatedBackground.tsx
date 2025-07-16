import React from 'react';

interface AnimatedBackgroundProps {
  variant?: 'default' | 'hero' | 'section';
  className?: string;
}

export const AnimatedBackground: React.FC<AnimatedBackgroundProps> = ({ 
  variant = 'default', 
  className = '' 
}) => {
  const sphereConfigs = {
    default: [
      { size: 'w-32 h-32 md:w-64 md:h-64', gradient: 'from-cyan-500/30 to-blue-500/30', position: 'top-1/4 left-1/4', animation: 'moving-sphere-1' },
      { size: 'w-48 h-48 md:w-96 md:h-96', gradient: 'from-purple-500/30 to-pink-500/30', position: 'bottom-1/6 right-1/4', animation: 'moving-sphere-2' },
      { size: 'w-64 h-64 md:w-128 md:h-128', gradient: 'from-emerald-500/30 to-teal-500/30', position: 'top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2', animation: 'moving-sphere-3' },
      { size: 'w-40 h-40 md:w-80 md:h-80', gradient: 'from-yellow-500/30 to-orange-500/30', position: 'top-3/4 left-1/3', animation: 'moving-sphere-4' }
    ],
    hero: [
      { size: 'w-32 h-32 md:w-64 md:h-64', gradient: 'from-cyan-500/20 to-purple-500/20', position: 'top-1/4 left-1/4', animation: 'moving-sphere-5' },
      { size: 'w-48 h-48 md:w-96 md:h-96', gradient: 'from-purple-500/20 to-emerald-500/20', position: 'bottom-1/3 right-1/4', animation: 'moving-sphere-6' },
      { size: 'w-64 h-64 md:w-128 md:h-128', gradient: 'from-emerald-500/20 to-cyan-500/20', position: 'top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2', animation: 'moving-sphere-7' }
    ],
    section: [
      { size: 'w-32 h-32 md:w-64 md:h-64', gradient: 'from-emerald-500/20 to-teal-500/20', position: 'top-1/6 right-1/6', animation: 'moving-sphere-8' },
      { size: 'w-48 h-48 md:w-96 md:h-96', gradient: 'from-teal-500/20 to-cyan-500/20', position: 'bottom-1/4 left-1/6', animation: 'moving-sphere-9' },
      { size: 'w-64 h-64 md:w-128 md:h-128', gradient: 'from-cyan-500/20 to-emerald-500/20', position: 'top-2/3 right-1/3', animation: 'moving-sphere-10' }
    ]
  };

  const spheres = sphereConfigs[variant];

  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      {spheres.map((sphere, index) => (
        <div
          key={index}
          className={`absolute ${sphere.size} bg-gradient-to-r ${sphere.gradient} ${sphere.position} rounded-full blur-3xl animate-pulse ${sphere.animation}`}
        />
      ))}
    </div>
  );
};
