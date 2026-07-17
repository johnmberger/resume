import { defineConfig } from 'vite'

// Project Pages: https://johnmberger.github.io/resume/
// For a custom domain / Vercel root deploy, set base: '/'
export default defineConfig({
  base: process.env.GITHUB_PAGES === 'true' ? '/resume/' : '/',
})
