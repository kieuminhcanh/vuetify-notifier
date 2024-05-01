// eslint-disable
/* prettier-ignore */
// @ts-nocheck
// eslint-disable @typescript-eslint/ban-ts-comment
// noinspection JSUnusedGlobalSymbols

import { createNotifier, NotifierSymbol } from '@/plugins/vuetify-notifier/Notifier';
import { vNotifierConfirm, vNotifierInput } from '@/plugins/vuetify-notifier/directives'
import type { NotifierInstance } from './types'

const VuetifyNotifier = {
  install: (app: App, options?: any) => {
    app.provide(NotifierSymbol, createNotifier(app, options))
    app.directive('notifier-confirm', vNotifierConfirm)
    app.directive('notifier-input', vNotifierInput)
  },
}

export function useNotifier(): NotifierInstance {
  const vm = getCurrentInstance()
  if (!vm) {
    throw new Error(`[Vuetify Notifier] useNotifier() must be called from inside a setup function`)
  }

  const notifier = inject(NotifierSymbol)

  return notifier || createNotifier(vm)  
}


export { VuetifyNotifier, vNotifierConfirm, vNotifierInput, NotifierInstance }
