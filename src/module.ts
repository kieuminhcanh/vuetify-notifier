import { addComponent, addImports, addPlugin, createResolver, defineNuxtModule } from '@nuxt/kit'
import { defu } from 'defu'
import { defaults } from './options'

export default defineNuxtModule({
  meta: {
    name: 'notifier-nuxt-module',
    configKey: 'notifier',
    compatibility: {
      nuxt: '>=3.0.0',
    },
  },
  setup(options, nuxt) {
    const { resolve } = createResolver(import.meta.url)

    nuxt.options.runtimeConfig.public.notifier = defu(options, defaults)

    addComponent({
      name: 'VNotifierContainer',
      filePath: resolve('./runtime/components/NotifierContainer.vue'),
    })

    addImports({
      name: 'useNotifier',
      as: 'useNotifier',
      from: resolve('./runtime/composables/useNotifier'),
    })

    // Do not add the extension since the `.ts` will be transpiled to `.mjs` after `npm run prepack`
    addPlugin(resolve('./runtime/plugin'))
  },
  hooks: {
    'prepare:types': ({ references }) => {
      references.push({
        path: 'runtime/types.d.ts',
      })
    },
  },
})
