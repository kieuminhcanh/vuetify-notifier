import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import ComponentImport from 'unplugin-vue-components/vite'
import VuetifyImport, { transformAssetUrls } from 'vite-plugin-vuetify'
// @ts-ignore
import { fileURLToPath, URL } from 'node:url'

export default defineConfig({
  base: '/vuetify-notifier/',
  plugins: [
    vue({
      template: {
        transformAssetUrls,
      },
    }),        
    AutoImport({
      dts: true,
      imports: [
        'vue',
        {
          vuetify: ['useTheme', 'useDisplay'],
        },
      ],      
      injectAtEnd: true,
      dirs: ['src/composables', 'src/plugins/vuetify-notifier/composables'],
    }),
    ComponentImport({
      dts: true,
      dirs: ['src/components', 'src/plugins/vuetify-notifier/components', 'src/plugins/vuetify-notifier/utils', 'src/plugins/vuetify-notifier/types'],      
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
  },
})
