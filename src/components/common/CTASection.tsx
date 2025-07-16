import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface CTASectionProps {
  title: string;
  description: string;
  primaryButtonText: string;
  primaryButtonLink: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
  gradientColors?: {
    primary: string;
    secondary: string;
  };
  className?: string;
}

export const CTASection: React.FC<CTASectionProps> = ({
  title,
  description,
  primaryButtonText,
  primaryButtonLink,
  secondaryButtonText,
  secondaryButtonLink,
  gradientColors = {
    primary: 'from-emerald-500 to-teal-500',
    secondary: 'from-emerald-400 to-teal-400'
  },
  className = ''
}) => {
  return (
    <section className={`py-16 md:py-20 px-4 relative ${className}`}>
      <div className="container mx-auto text-center">
        <Card className="max-w-4xl mx-auto p-8 md:p-12 bg-slate-800/10 backdrop-blur-xl border border-slate-700/20 hover:border-slate-600/40 transition-all duration-500 animate-fade-in">
          <h2 className="text-2xl md:text-4xl font-bold mb-4 md:mb-6 text-white">
            {title}
          </h2>
          <p className="text-lg md:text-xl text-slate-300 mb-6 md:mb-8 max-w-2xl mx-auto">
            {description}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
            <Button 
              asChild 
              size="lg" 
              className={`text-sm md:text-base bg-gradient-to-r ${gradientColors.primary} hover:from-emerald-600 hover:to-teal-600 transition-all duration-500 shadow-lg`}
            >
              <Link to={primaryButtonLink}>
                {primaryButtonText}
                <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
              </Link>
            </Button>
            {secondaryButtonText && secondaryButtonLink && (
              <Button 
                asChild 
                variant="outline" 
                size="lg" 
                className="border-emerald-400/30 bg-emerald-500/10 hover:bg-emerald-500/20 text-sm md:text-base transition-all duration-500"
              >
                <Link to={secondaryButtonLink}>
                  <span className={`bg-gradient-to-r ${gradientColors.secondary} bg-clip-text text-transparent font-semibold`}>
                    {secondaryButtonText}
                  </span>
                </Link>
              </Button>
            )}
          </div>
        </Card>
      </div>
    </section>
  );
};
