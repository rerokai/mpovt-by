

import { useEffect } from 'react';

const CustomScrollbar = () => {
  useEffect(() => {
    // Добавляем только мобильную логику для скроллбара
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
      if (window.innerWidth < 1280) {
        window.removeEventListener('scroll', handleScroll);
      }
      clearTimeout(scrollTimer);
    };
  }, []);

  return null;
};

export default CustomScrollbar;

