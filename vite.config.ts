import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';

const srcP = path.resolve(__dirname, './src');
// https://vite.dev/config/
export default defineConfig({
  base: '/web-editor/',

  plugins: [svgr(), react()],
  resolve: {
    alias: {
      '@': srcP,
    },
  },
});
