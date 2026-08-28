import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    // Exposed on the local network so you can open it on a real phone.
    host: true,
    port: 5173,
  },
})
