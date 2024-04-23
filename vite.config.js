import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://lonitlu.github.io/study-practice-react/",
  plugins: [react()],
});
