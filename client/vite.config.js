import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3001, // Ensure this port is consistent with your setup
    open: true,
    proxy: {
      '/graphql': {
        target: 'http://localhost:3001',
        changeOrigin: true,
        secure: false,
      },
    },
    fs: {
      allow: [
        // Allow serving files from the project root directory
        path.resolve(__dirname),
        // Allow serving files from the client directory
        path.resolve(__dirname, 'client'),
        // Allow serving files from the node_modules directory for slick-carousel fonts
        path.resolve(__dirname, 'node_modules/slick-carousel/slick/fonts'),
      ],
    },
  },
});
