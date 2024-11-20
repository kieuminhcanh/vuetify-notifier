import { defineNuxtModule, addPlugin, createResolver, addComponentsDir, addImports, installModule, addTypeTemplate, addComponent } from '@nuxt/kit'

// Module options TypeScript interface definition
export interface ModuleOptions { }

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'vuetifier',
    configKey: 'vuetifier',
    compatibility: {
      nuxt: '>=3.0.0',
    }
  },
  // Default configuration options of the Nuxt module
  defaults: {},
  async setup(_options, _nuxt) {
    const resolver = createResolver(import.meta.url)

    await installModule('vuetify-nuxt-module', {
      exposeConfig: true,
    })

    addComponent({
      filePath: resolver.resolve('runtime/components/NotifierContainer.vue'),
      name: 'VNotifierContainer',
    })

    addImports({
      name: 'useNotifier', // name of the composable to be used
      as: 'useNotifier',
      from: resolver.resolve('runtime/composables/useNotifier') // path of composable
    })

    // Do not add the extension since the `.ts` will be transpiled to `.mjs` after `npm run prepack`
    addPlugin(resolver.resolve('./runtime/plugin'))
  },
})
