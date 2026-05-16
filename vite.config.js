import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Cambiar 'inclusion-digital-medellin' por el nombre exacto del repositorio en GitHub
const repoName = 'inclusion-digital-medellin'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: `/${repoName}/`,
})
