import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler',
      },
    },
    modules: {
      generateScopedName: '[name]__[local]__[hash:base64:5]',
    },
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
  },
});
