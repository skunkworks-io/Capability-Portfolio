# Manual Deployment Instructions

[![Build and Deploy with Gulp](https://github.com/skunkworks-io/Capability-Portfolio/actions/workflows/npm-gulp.yml/badge.svg)](https://github.com/skunkworks-io/Capability-Portfolio/actions/workflows/npm-gulp.yml)

If you're deploying locally rather than through GitHub Actions, follow these steps:

## Option 1: Using gh-pages package locally

1. Make sure you have the gh-pages package installed:
   ```bash
   npm install --save-dev gh-pages
   ```

2. Configure your Git identity locally:
   ```bash
   git config --global user.name "Your Name"
   git config --global user.email "your.email@example.com"
   ```

3. Build and deploy your project:
   ```bash
   npm run build
   npm run deploy
   ```

## Option 2: Manual deployment

If the gh-pages package is causing issues, you can deploy manually:

1. Build your project:
   ```bash
   npm run build
   ```

2. Create a new orphan branch for GitHub Pages:
   ```bash
   git checkout --orphan gh-pages
   git rm -rf .
   ```

3. Copy your dist folder contents to the root and commit:
   ```bash
   cp -r dist/* .
   git add .
   git commit -m "Deploy to GitHub Pages"
   git push origin gh-pages --force
   ```

4. Switch back to your main branch:
   ```bash
   git checkout main
   ```

## GitHub Repository Settings

Make sure your GitHub repository is configured to use the gh-pages branch for GitHub Pages:

1. Go to your repository on GitHub
2. Navigate to Settings > Pages
3. Select "Deploy from a branch" under Source
4. Select "gh-pages" branch and "/ (root)" folder
5. Click Save

Your site should be live at `https://skunkworks-io.github.io/Capability-Portfolio/`
