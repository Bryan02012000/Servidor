import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/tasks': 'https://api-tareas-rq8b.onrender.com',
      '/users': 'https://api-tareas-rq8b.onrender.com'
    }
  }
})