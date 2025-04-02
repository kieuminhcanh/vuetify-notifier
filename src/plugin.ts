import { defu } from 'defu'
import type { App } from 'vue'
import { defaults } from './runtime/options'

import NotifierContainer from './runtime/components/NotifierContainer.vue'
import { vNotifierConfirm, vNotifierInput } from './runtime/directives'
import type { NotifierOptions } from './runtime/types'

export { useNotifier } from './runtime/composables/useNotifier'
export default {
  install: (app: App, options: Partial<NotifierOptions> = {}) => {
    app.provide('notifier', defu(options, defaults))
    app.component('VNotifierContainer', NotifierContainer)
    app.directive('notifier-confirm', vNotifierConfirm)
    app.directive('notifier-input', vNotifierInput)
  },
}
