import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/test-react-app',
  publicDir: 'public',
  build: {
    outDir: 'dist'
  }
});
