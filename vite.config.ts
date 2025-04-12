import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';

const srcP = path.resolve(__dirname, './src');
// https://vite.dev/config/
export default defineConfig({
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  plugins: [svgr(), react()],
  resolve: {
    alias: {
      '@': srcP,
    },
  },
});
