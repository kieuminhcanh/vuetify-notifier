import { defineNuxtModule, addPlugin, createResolver, addImports, installModule, addTypeTemplate, addComponent } from '@nuxt/kit'

export default defineNuxtModule({
  meta: {
    name: 'notifier-nuxt-module',
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
  setup(options, nuxt) {
    const { resolve } = createResolver(import.meta.url)

    addComponent({
      name: 'VNotifierContainer',
      filePath: resolve('runtime/components/NotifierContainer.vue'),
    })

    addImports({
      name: 'useNotifier',
      from: resolve('runtime/composables/useNotifier'),
      meta: options
    })

    // Do not add the extension since the `.ts` will be transpiled to `.mjs` after `npm run prepack`
    addPlugin(resolve('./runtime/plugin'))
  },
  hooks: {
    'prepare:types': ({ references }) => {
      references.push({ 
        path: 'runtime/types.d.ts',
       })
    }
  }
})
