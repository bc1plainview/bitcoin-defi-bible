import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Use subpath for GitHub Pages temp link, root for custom domain
  base: process.env.GITHUB_PAGES_SUBPATH ? '/bitcoin-defi-bible/' : '/',
})
