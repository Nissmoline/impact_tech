import React, { useLayoutEffect, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollManager: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
  }, []);

  useLayoutEffect(() => {
    const { hash } = location;
    const scrollToTop = () => window.scrollTo({ top: 0, left: 0, behavior: 'auto' });

    if (hash) {
      const target = document.getElementById(hash.replace('#', ''));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        return;
      }
    }

    scrollToTop();
  }, [location.pathname, location.search, location.hash]);

  return null;
};

export default ScrollManager;
