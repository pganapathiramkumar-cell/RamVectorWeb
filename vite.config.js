import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],

  build: {
    // Split heavy vendor bundles so the main chunk stays lean
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor-react':  ['react', 'react-dom'],
          'vendor-motion': ['framer-motion'],
          'vendor-icons':  ['lucide-react'],
          'vendor-seo':    ['react-helmet-async'],
        },
      },
    },
    // Inline tiny assets instead of emitting separate files
    assetsInlineLimit: 4096,
    cssCodeSplit: true,
    sourcemap: false,
  },
});
