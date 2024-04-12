import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import ComponentImport from 'unplugin-vue-components/vite'
import VuetifyImport from 'vite-plugin-vuetify'
import { fileURLToPath, URL } from 'node:url'
import dts from 'vite-plugin-dts';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    dts({
      outDir: 'dist',
      entryRoot: 'src/plugins/vuetify-notifier',
    }),
    AutoImport({
      dts: true,
      imports: [
        'vue',
        {
          vuetify: ['useTheme', 'useDisplay'],
        },
      ],
      eslintrc: { enabled: true, globalsPropValue: 'readonly' },
      injectAtEnd: true,
      dirs: ['src/composables', 'src/plugins/vuetify-notifier/composables'],
    }),
    ComponentImport({
      dts: true,
      dirs: ['src/components', 'src/plugins/vuetify-notifier/components', 'src/plugins/vuetify-notifier/utils', 'src/plugins/vuetify-notifier/types'],
      types: [{ from: 'src/types.d.ts', names: ['NotifierOptions', 'NotifierDefaultOptions', 'NotifierMountComponent', 'NotifierDialogOptions'] }],
    }),
    VuetifyImport({
      autoImport: true,
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
    extensions: ['.js', '.json', '.jsx', '.mjs', '.ts', '.tsx', '.vue'],
  },
  server: {
    port: 3000,
  },
  build: {
    lib: {
      entry: 'src/plugins/vuetify-notifier/index.ts',
      name: 'VuetifyNotifier',
      fileName: 'vuetify-notifier',
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
