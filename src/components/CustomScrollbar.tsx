
import { useEffect } from 'react';

const CustomScrollbar = () => {
  useEffect(() => {
    // Добавляем стили для кастомного скроллбара
    const style = document.createElement('style');
    style.textContent = `
      /* Webkit browsers (Chrome, Safari, newer Edge) */
      ::-webkit-scrollbar {
        width: 8px;
        height: 8px;
      }

      ::-webkit-scrollbar-track {
        background: transparent;
      }

      ::-webkit-scrollbar-thumb {
        background: rgba(255, 255, 255, 0.3);
        border-radius: 4px;
        transition: all 0.3s ease;
      }

      ::-webkit-scrollbar-thumb:hover {
        background: rgba(255, 255, 255, 0.5);
      }

      /* Firefox */
      * {
        scrollbar-width: thin;
        scrollbar-color: rgba(255, 255, 255, 0.3) transparent;
      }

      /* Mobile scrollbar animation */
      @media (max-width: 1279px) {
        ::-webkit-scrollbar-thumb {
          opacity: 0;
          animation: scrollbar-fade-in 0.3s ease-out;
        }

        body::-webkit-scrollbar-thumb {
          animation: scrollbar-fade-in 0.3s ease-out, scrollbar-fade-out 0.5s ease-out 1s forwards;
        }

        body.scrolling::-webkit-scrollbar-thumb {
          opacity: 1;
          animation: scrollbar-fade-in 0.3s ease-out;
        }
      }

      @keyframes scrollbar-fade-in {
        from { opacity: 0; }
        to { opacity: 1; }
      }

      @keyframes scrollbar-fade-out {
        from { opacity: 1; }
        to { opacity: 0; }
      }
    `;
    document.head.appendChild(style);

    // Добавляем логику для мобильного скроллбара
    let scrollTimer: NodeJS.Timeout;
    const handleScroll = () => {
      document.body.classList.add('scrolling');
      clearTimeout(scrollTimer);
      scrollTimer = setTimeout(() => {
        document.body.classList.remove('scrolling');
      }, 1500);
    };

    if (window.innerWidth < 1280) {
      window.addEventListener('scroll', handleScroll);
    }

    return () => {
      document.head.removeChild(style);
      if (window.innerWidth < 1280) {
        window.removeEventListener('scroll', handleScroll);
      }
      clearTimeout(scrollTimer);
    };
  }, []);

  return null;
};

export default CustomScrollbar;
