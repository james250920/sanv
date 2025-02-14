import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  base:'https://james250920.github.io/sanv/',
  esbuild: {
    minify: true,
    target: 'esnext',
  },
  build: {
    outDir: 'docs',
  },
})
