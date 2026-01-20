import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

/// <reference types="vitest" />

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    return {
      test: {
        environment: 'jsdom',
        globals: true,
        setupFiles: ['./tests/setup.ts'],
        css: true,
        alias: {
          'html-parse-stringify': path.resolve(__dirname, 'utils/html-parse-stringify.ts'),
          'react-i18next': path.resolve(__dirname, 'tests/mocks/react-i18next.ts'),
        },
        deps: {
          inline: ['react-i18next'],
        },
        coverage: {
          provider: 'v8',
          reporter: ['text', 'json', 'html'],
          exclude: [
            'node_modules/',
            'tests/',
            '*.config.ts',
            '*.config.js',
            'dist/',
          ],
        },
      },
      server: {
        port: 3000,
        host: '0.0.0.0',
      },
      plugins: [react()],
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
          'html-parse-stringify': path.resolve(__dirname, 'utils/html-parse-stringify.ts'),
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
