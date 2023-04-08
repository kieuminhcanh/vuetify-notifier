import { addImports, addPlugin, createResolver, defineNuxtModule } from '@nuxt/kit'

export default defineNuxtModule({
  meta: {
    // Usually the npm package name of your module
    name: 'vuetify-notifier',
    // The key in `nuxt.config` that holds your module options
    configKey: 'notifier',
    // Compatibility constraints
    compatibility: {
      // Semver version of supported nuxt versions
      nuxt: '^3.0.0'
    }
  },
  // Default configuration options for your module, can also be a function returning those
  defaults: {},
  // Shorthand sugar to register Nuxt hooks
  hooks: {},
  // The function holding your module logic, it can be asynchronous
  setup(moduleOptions, nuxt) {
    const { resolve } = createResolver(import.meta.url)

    addImports({
      name: 'useNotifier', // name of the composable to be used
      as: 'useNotifier',
      from: resolve('./composables') // path of composable 
    })

    addPlugin(resolve('./plugin'))
  }
})


// @ts-ignore
// export default defineNuxtPlugin((nuxtApp: any) => {
//   nuxtApp.vueApp.use(VuetifyNotifier)
//   return {
//     provide: { notifier: createNotifier(nuxtApp.vueApp) },
//   };
// });
