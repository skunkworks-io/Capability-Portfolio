import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'fs'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: 'html-transform',
      transformIndexHtml(html) {
        // Replace script source with the correct path for GitHub Pages
        return html.replace(
          /<script type="module" src="\/src\/main.tsx"><\/script>/,
          '<script type="module" src="./index.js"></script>'
        );
      },
      closeBundle() {
        // Create .nojekyll file
        fs.writeFileSync(path.resolve(__dirname, 'dist', '.nojekyll'), '');
      }
    }
  ],
  base: '/Capability-Portfolio/', // This should match your repository name
  build: {
    outDir: 'dist',
    // Ensure files don't use hashed names for simplicity
    rollupOptions: {
      output: {
        entryFileNames: 'index.js',
        chunkFileNames: '[name].js',
        assetFileNames: '[name].[ext]'
      }
    }
  }
})
