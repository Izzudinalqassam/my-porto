import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite' // Add this line
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
})
