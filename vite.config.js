import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // For GitHub Pages: if repo is NOT named <username>.github.io, set base to "/<repo-name>/"
  // For example: base: "/portfolio/"
  // If repo IS named <username>.github.io, use base: "/"
  // For Vercel: base can stay as "/" (Vercel handles routing automatically)
  base: '/',
})

