import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/deep-majumdar-portfolio/',
  plugins: [react()],
})
