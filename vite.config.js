import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react-swc';

// https://vite.dev/config/
export default defineConfig({
  base: '/my-porto/',
  plugins: [
    react(), 
    tailwindcss(),
  ],
  server: {
    fs: {
      // Allow serving files from the project root
      allow: ['..'],
    },
  },
});
