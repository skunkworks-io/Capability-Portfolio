import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Capability-Portfolio/', // This should match your repository name
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    },
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          bootstrap: ['bootstrap']
        },
      },
    },
  },
  css: {
    // This ensures Bootstrap CSS is properly processed
    preprocessorOptions: {
      scss: {
        additionalData: `@import "bootstrap/scss/bootstrap";`
      }
    }
  }
})
