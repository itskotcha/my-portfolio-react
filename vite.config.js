// vite.config.js - ปรับแต่งสำหรับ deployment
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/', // สำหรับ GitHub Pages ใช้ '/<repository-name>/'
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false, // ปิดสำหรับ production
  }
})