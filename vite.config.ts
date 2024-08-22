import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@sa': path.resolve(__dirname, 'src/service/applicatif'),
      '@bdl': path.resolve(__dirname, 'src/service/bdl'),
      '@DTO': path.resolve(__dirname, 'src/data/DTO'),
      '@components': path.resolve(__dirname, 'src/presentation/components'),
    },
  },
  }
);
