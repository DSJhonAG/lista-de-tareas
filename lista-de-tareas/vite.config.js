import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// IMPORTANT: change '/lista-de-tareas/' to match your GitHub repository
// name exactly, e.g. if your repo is github.com/user/mi-repo then
// base should be '/mi-repo/'. This is required for GitHub Pages to
// find your CSS/JS assets correctly.
export default defineConfig({
  plugins: [react()],
  base: '/lista-de-tareas/',
})
