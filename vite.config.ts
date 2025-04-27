import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  server: {
    host: true, // Enable access from network
    port: 5173,  // Specify port
  },
  preview: {
    port: 5173,
    host: true,
  },
});