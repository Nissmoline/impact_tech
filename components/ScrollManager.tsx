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
    const wasHome = prevPath === '/' || prevPath === '/el';
    const isHome = location.pathname === '/' || location.pathname === '/el';

    if (wasHome) {
      homeScrollY.current = window.scrollY;
    }

    if (isHome) {
      window.scrollTo({ top: homeScrollY.current ?? 0, behavior: 'auto' });
    } else {
      window.scrollTo({ top: 0, behavior: 'auto' });
    }

    previousPath.current = location.pathname;
  }, [location.pathname]);

  return null;
};

export default ScrollManager;
