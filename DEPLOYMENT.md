# GitHub Pages Deployment

This repository can be deployed to GitHub Pages to make your Wikipedia article replica publicly accessible without requiring GitHub logins.

## Setup Instructions

### 1. Enable GitHub Pages in Your Repository

1. Go to your repository on GitHub
2. Click on **Settings** tab
3. Scroll down to **Pages** section in the left sidebar
4. Under **Source**, select **GitHub Actions**

### 2. Push Your Code

The deployment workflow will automatically trigger when you push to the `main` branch:

```bash
git add .
git commit -m "Add GitHub Pages deployment"
git push origin main
```

### 3. Access Your Deployed Site

After the workflow completes (usually 2-3 minutes), your site will be available at:
```
https://[your-username].github.io/[repository-name]/
```

## How It Works

The deployment process:

1. **Mock GitHub Spark APIs**: Since GitHub Spark's special features (like `useKV`, `spark.llm`) only work in the Spark environment, we created mock implementations that use `localStorage` instead.

2. **Static Build**: Uses a special Vite configuration (`vite.config.pages.ts`) that:
   - Sets the base path for GitHub Pages
   - Removes GitHub Spark dependencies
   - Creates a standalone static build

3. **GitHub Actions**: Automatically builds and deploys your site whenever you push changes.

## Features That Work vs. Don't Work

### ✅ What Works on GitHub Pages:
- All visual components and styling
- Static content and navigation
- Responsive design
- Typography and layout

### ❌ What Doesn't Work:
- Real-time data persistence (but localStorage is used as fallback)
- LLM integration (`spark.llm` calls)
- GitHub user authentication
- Server-side features

## Local Testing

To test the GitHub Pages build locally:

```bash
npm run build:pages
npm run preview
```

## Customization

To modify the deployment:

- Edit `.github/workflows/deploy.yml` for CI/CD changes
- Edit `vite.config.pages.ts` for build configuration
- Edit `src/lib/mock-hooks.ts` to change fallback behavior