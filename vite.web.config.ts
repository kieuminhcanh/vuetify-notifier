import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import VuetifyImport, { transformAssetUrls } from 'vite-plugin-vuetify'
import { fileURLToPath, URL } from 'url'

export default defineConfig({
  base: '/vuetify-studio/',
  plugins: [
    vue({
      template: {
        transformAssetUrls,
      },
    }),
    VuetifyImport({
      autoImport: true,
    }),
  ],
  define: { 'process.env': {} },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
    extensions: ['.js', '.json', '.jsx', '.mjs', '.ts', '.tsx', '.vue'],
  },
  build: {
    outDir: 'dist-web',
    rollupOptions: {
      external: ['vue'],
      output: {
        exports: 'named',
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
  optimizeDeps: {
    exclude: ['vuetify'],
    entries: ['./src/**/*.vue'],
  },
})
