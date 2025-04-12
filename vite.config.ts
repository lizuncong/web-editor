import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';

const srcP = path.resolve(__dirname, './src');
// https://vite.dev/config/
export default (params: { mode: string }) => {
  console.log('params...', params);
  return defineConfig({
    base: params.mode === 'development' ? '' : '/web-editor/',

    plugins: [svgr(), react()],
    resolve: {
      alias: {
        '@': srcP,
      },
    },
  });
};
