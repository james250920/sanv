import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  esbuild: {
    minify: true,
    target: 'esnext',
  },
  Base:'https://james250920.github.io/sanv/',
})
