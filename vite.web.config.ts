import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import VuetifyImport from 'vite-plugin-vuetify'

export default defineConfig({
  plugins: [
    vue(),
    VuetifyImport({
      autoImport: true,
    }),
  ],
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
})
