import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { existsSync } from 'node:fs'

// https://vite.dev/config/
export default defineConfig({
  base: '/',
  // The resume tile is a link only when the owner's PDF is actually there.
  define: { __HAS_CV__: existsSync('public/federico-landorno-cv.pdf') },
  plugins: [
    react(),
  ],
  
})
