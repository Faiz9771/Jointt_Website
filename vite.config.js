import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.PNG'],
  build: {
    commonjsOptions: {
      include: [/motion/, /node_modules/],
    },
    optimizeDeps: {
      include: ['motion/react'],
    },
  },
})


