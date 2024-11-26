import { defineNuxtModule, addPlugin, createResolver, addImports, installModule, addTypeTemplate, addComponent } from '@nuxt/kit'
import { defu } from 'defu'

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
  defaults: {
    toast: {
      position: 'fixed',
      location: 'top right',
    }
  },
  async setup(_options, _nuxt) {
    const resolver = createResolver(import.meta.url)

    _nuxt.options.build.transpile.push('vuetify-nuxt-module');

    await installModule('vuetify-nuxt-module')

    _nuxt.options.runtimeConfig.public.notifier = _options
    // _nuxt.options.runtimeConfig.public.notifier = defu(_nuxt.options.runtimeConfig.public.notifier, {
    //   foo: _options.foo
    // })


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
