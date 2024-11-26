import { defineNuxtModule, addPlugin, createResolver, addImports, installModule, addTypeTemplate, addComponent } from '@nuxt/kit'
import { defu } from 'defu'

// Module options TypeScript interface definition
export interface ModuleOptions { }

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'notifier',
    configKey: 'notifier',
    compatibility: {
      nuxt: '>=3.0.0',
    }
  },
  // Default configuration options of the Nuxt module
  defaults: {
    toast: {
      position: 'fixed',
      location: 'top right',
    }
  },
  async setup(options, nuxt) {
    const { resolve } = createResolver(import.meta.url)

    await installModule('vuetify-nuxt-module')

    nuxt.options.runtimeConfig.public.notifier = options

    addComponent({
      name: 'VNotifierContainer',
      filePath: resolve('runtime/components/NotifierContainer.vue'),
    })

    addImports({
      name: 'useNotifier',
      from: resolve('runtime/composables/useNotifier')
    })

    // Do not add the extension since the `.ts` will be transpiled to `.mjs` after `npm run prepack`
    addPlugin(resolve('./runtime/plugin'))
  },
})
