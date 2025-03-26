import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server:{
    port:2000,
    proxy:{
      "/api/":{
        target:"http://localhost:2000",
        changeOrigin:true
      }
    }
  }
})