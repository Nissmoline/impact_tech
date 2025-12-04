import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Preloader: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsLoading(false), 500);
          return 100;
        }
        return prev + 10;
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950 dark:bg-slate-950 light:bg-slate-50"
        >
          <div className="text-center">
            {/* Animated Logo */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                className="w-20 h-20 mx-auto"
              >
                <svg
                  viewBox="0 0 100 100"
                  className="w-full h-full"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <motion.path
                    d="M50 10 L90 90 L10 90 Z"
                    stroke="url(#gradient)"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                  />
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#06B6D4" />
                      <stop offset="100%" stopColor="#A855F7" />
                    </linearGradient>
                  </defs>
                </svg>
              </motion.div>
            </motion.div>

            {/* Loading Text */}
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-2xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-500 mb-4"
            >
              IMPACT TECH
            </motion.h2>

            {/* Progress Bar */}
            <div className="w-64 h-1 bg-slate-800 dark:bg-slate-800 light:bg-slate-200 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.3 }}
                className="h-full bg-gradient-to-r from-cyan-500 to-purple-500"
              />
            </div>

            {/* Progress Percentage */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-4 text-sm text-slate-400 dark:text-slate-400 light:text-slate-600"
            >
              {progress}%
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
