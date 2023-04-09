import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts';
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [
    vue(),
  ],
  build: {
    outDir: 'dist-web',
  }
})
