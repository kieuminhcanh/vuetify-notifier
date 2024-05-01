import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import viteComponentsImport from 'unplugin-vue-components/vite'
import viteAutoImport from 'unplugin-auto-import/vite'
import viteVuetifyImport from 'vite-plugin-vuetify'

import { fileURLToPath, URL } from 'url'
import { resolve } from 'path';

export default defineConfig({
  plugins: [
    vue(),    
    viteComponentsImport({
      dts: true,
    }),
    viteAutoImport({
      imports: [
        'vue',
        {
          from: 'vue',
          imports: ['App', 'ObjectDirective', 'Component', 'ComponentInternalInstance', 'ComponentPublicInstance', 'ConcreteComponent', 'DirectiveBinding', 'VNode'],
          type: true,
        },        
      ],
      dts: true,
      dirs: ['src/plugins/vuetify-notifier/composables'],
    }),
    viteVuetifyImport(),    
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
    extensions: ['.js', '.json', '.jsx', '.mjs', '.ts', '.tsx', '.vue'],
  },
  build: {    
    lib: {
      entry: resolve(__dirname, 'src/plugins/vuetify-notifier/index.ts'),
      name: 'VuetifyNotifier',
      fileName: 'vuetify-notifier',
      formats: ['es', 'umd', 'iife'],
    },
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
