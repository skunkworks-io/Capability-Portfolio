import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/test-react-app',
  publicDir: 'public', // Include Gulp's output
  build: {
    outDir: 'dist' // Ensure Vite outputs to dist/
  }
});
