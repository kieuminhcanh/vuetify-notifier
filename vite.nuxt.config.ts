import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts';
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [
    vue(),
    dts({
      outputDir: 'dist',
      entryRoot: 'src/plugins/vuetify-notifier',
    })
  ],
  build: {
    outDir: 'dist/nuxt',
    emptyOutDir: false,
    lib: {
      entry: 'src/plugins/vuetify-notifier/nuxt/module.ts',
      name: 'VuetifyNotifierNuxt',
      fileName: 'module',
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue',
        },
      },
    },
  },

})
