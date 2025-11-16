import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export default defineConfig({
  plugins: [react()],
  server: { port: 3000 },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        operations: resolve(__dirname, 'public/operations/index.html'),
        transaction: resolve(__dirname, 'public/transaction/index.html'),
        analytics: resolve(__dirname, 'public/analytics/index.html')
      }
    }
  }
})
