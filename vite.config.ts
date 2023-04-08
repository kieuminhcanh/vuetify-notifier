import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts';
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [
    vue(),
  ],
  // plugins: [
  //   vue(),
  //   dts({
  //     outputDir: 'dist',
  //     entryRoot: 'src/plugins/vuetify-notifier',
  //   })
  // ],
  // build: {
  //   lib: {
  //     entry: 'src/plugins/vuetify-notifier/index.ts',
  //     name: 'VuetifyNotifier',
  //     fileName: 'vuetify-notifier',
  //   },
  //   rollupOptions: {
  //     external: ['vue'],
  //     output: {
  //       exports: 'named',
  //       globals: {
  //         vue: 'Vue',
  //       },
  //     },
  //   },
  // },

})
