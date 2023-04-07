import { resolve } from 'path'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts';
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    dts({
      entryRoot: resolve(__dirname, 'src/plugins/vuetify-notifier'),
    })
  ],
  build: {
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: resolve(__dirname, 'src/plugins/vuetify-notifier/index.ts'),
      name: 'vuetify-notifier',
      // the proper extensions will be added
      fileName: 'vuetify-notifier',
    },

    rollupOptions: {      
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ['vue'],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        exports: 'named',
        globals: {
          vue: 'Vue',
        },
      },
    },
  },

})
