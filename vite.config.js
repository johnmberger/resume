import { defineConfig } from 'vite'

// Primary deploy: https://resume.johnberger.dev (Vercel, base '/')
// GitHub Pages fallback: https://johnmberger.github.io/resume/
export default defineConfig({
  base: process.env.GITHUB_PAGES === 'true' ? '/resume/' : '/',
})
