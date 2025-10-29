import React from 'react';

interface DescriptionSectionProps {
  title: string;
  paragraphs: string[];
  gradientColors?: string;
  className?: string;
}

export const DescriptionSection: React.FC<DescriptionSectionProps> = ({
  title,
  paragraphs,
  gradientColors = "from-cyan-400 to-blue-400",
  className = ""
}) => {
  return (
    <section className={`py-16 md:py-20 px-4 relative ${className}`}>
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center mb-12 animate-fade-in">
          <h2 className={`text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r ${gradientColors} bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(34,211,238,0.5)]`}>
            {title}
          </h2>
          <div className="text-slate-300 leading-relaxed space-y-4">
            {paragraphs.map((paragraph, index) => (
              <p key={index}>
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
