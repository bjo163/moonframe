import { defineConfig } from 'vite';

export default defineConfig({
  root: 'demo',
  base: './',
  build: { outDir: '../dist', emptyOutDir: true },
  server: { host: '127.0.0.1' },
  preview: { host: '127.0.0.1' },
});
