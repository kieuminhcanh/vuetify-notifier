import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import viteComponentsImport from 'unplugin-vue-components/vite'
import viteAutoImport from 'unplugin-auto-import/vite'
import viteVuetifyImport from 'vite-plugin-vuetify'
// @ts-ignore
import { fileURLToPath, URL } from 'node:url'

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
        {
          from: 'src/types.d.ts',
          imports: ['NotifierToastInput','NotifierConfirmInput','NotifierComponentProps', 'ConfirmResult', 'NotifierDialogOptions', 'NotifierMountComponent', 'NotifierComponentOptions', 'NotifierOptions', 'NotifierContent', 'NotifierToastOptions', 'NotifierComponent'],
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
  optimizeDeps: {
    entries: [],
  },
})
