import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        'zh-CN': './index.html',
        'en': './index.html',
        'ja': './index.html'
      },
      output: {
        entryFileNames: (chunkInfo) => {
          const lang = chunkInfo.name;
          return `${lang}/[name]-[hash].js`;
        },
        chunkFileNames: (chunkInfo) => {
          return `assets/[name]-[hash].js`;
        },
        assetFileNames: (assetInfo) => {
          return `assets/[name]-[hash].[ext]`;
        }
      }
    }
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
