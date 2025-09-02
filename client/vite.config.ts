import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  resolve: { // path 설정
    alias: [{
      find: "@src",
      replacement: path.resolve(__dirname, "src")
    },
    {
      find: "@components",
      replacement: path.resolve(__dirname, "src/components")
    },
    {
      find: "@assets",
      replacement: path.resolve(__dirname, "src/assets")
    }]
  }
})
