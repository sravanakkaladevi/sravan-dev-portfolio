import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/sravan-dev-portfolio/',
  plugins: [react()],
});
