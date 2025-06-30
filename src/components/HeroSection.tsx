
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import OptimizedVideoPlayer from "./OptimizedVideoPlayer";

const HeroSection = () => {
  const { t } = useLanguage();

  const scrollToContent = () => {
    const nextSection = document.querySelector('#content');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <OptimizedVideoPlayer
          src="https://assets.mixkit.co/videos/preview/mixkit-aerial-view-of-a-beautiful-resort-with-pier-44403-large.mp4"
          placeholder="https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2680&q=80"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
          {t.hero.title}
          <span className="block bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            {t.hero.subtitle}
          </span>
        </h1>
        
        <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
          {t.hero.description}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-3 text-lg font-semibold"
            onClick={scrollToContent}
          >
            {t.hero.exploreApartments}
          </Button>
          
          <Button 
            variant="outline" 
            size="lg"
            className="border-white/30 text-white hover:bg-white/10 px-8 py-3 text-lg"
            onClick={scrollToContent}
          >
            {t.hero.bookStay}
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <button 
          onClick={scrollToContent}
          className="animate-bounce p-2 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors"
          aria-label="Scroll down"
        >
          <ArrowDown className="w-6 h-6 text-white" />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
