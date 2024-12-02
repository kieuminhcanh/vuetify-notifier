import type { App } from "vue"
import NotifierContainer from "./runtime/components/NotifierContainer.vue"
import NotifierConfirm from "./runtime/components/NotifierConfirm.vue"
import { vNotifierConfirm, vNotifierInput } from './runtime/directives'
export default {
  install: (app: App, options: any) => {
    app.component('VNotifierContainer', NotifierContainer)
    app.directive('notifier-confirm', vNotifierConfirm)
    app.directive('notifier-input', vNotifierInput)
  }
}

export { useNotifier } from './runtime/composables/useNotifier'
