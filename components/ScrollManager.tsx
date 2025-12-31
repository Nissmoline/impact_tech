import React, { useLayoutEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Restores scroll to last position on Home ("/") and scrolls other pages to top.
 */
const ScrollManager: React.FC = () => {
  const location = useLocation();
  const previousPath = useRef(location.pathname);
  const homeScrollY = useRef(0);

  useLayoutEffect(() => {
    const prevPath = previousPath.current;

    // Save Home scroll position before navigating away
    if (prevPath === '/') {
      homeScrollY.current = window.scrollY;
    }

    if (location.pathname === '/') {
      window.scrollTo({ top: homeScrollY.current ?? 0, behavior: 'auto' });
    } else {
      window.scrollTo({ top: 0, behavior: 'auto' });
    }

    previousPath.current = location.pathname;
  }, [location.pathname]);

  return null;
};

export default ScrollManager;
