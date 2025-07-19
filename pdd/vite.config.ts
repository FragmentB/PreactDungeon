import { defineConfig } from 'vite'
import path from 'path';
import preact from '@preact/preset-vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [preact()],
  base: './',
   resolve: {
    alias: {
      '@assets': path.resolve(__dirname, 'src/assets'),
      // Add other aliases here if needed
    },
  },

})
