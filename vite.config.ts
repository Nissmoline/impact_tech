import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    return {
      server: {
        port: 3000,
        host: '0.0.0.0',
      },
      plugins: [react()],
      define: {
        'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
        'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      },
      build: {
        rollupOptions: {
          output: {
            manualChunks: {
              // React core
              'react-vendor': ['react', 'react-dom', 'react-router-dom'],
              // Three.js and 3D libraries
              'three-vendor': ['three', '@react-three/fiber', '@react-three/drei'],
              // Animation libraries
              'animation-vendor': ['framer-motion'],
              // Icons
              'icons-vendor': ['lucide-react'],
              // Sanity CMS
              'sanity-vendor': ['@sanity/client', '@sanity/image-url'],
            },
          },
        },
        chunkSizeWarningLimit: 1000, // Увеличить лимит до 1000 kB
        minify: 'terser',
        terserOptions: {
          compress: {
            drop_console: true, // Убрать console.log в production
            drop_debugger: true,
          },
        },
      },
    };
});
