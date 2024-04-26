import type { App, InjectionKey } from 'vue'
import { mergeProps, getCurrentInstance, inject } from 'vue'
import defaultOptions from '@/plugins/vuetify-notifier/utils/options.json'
import NotifierDialog from '@/plugins/vuetify-notifier/components/NotifierDialog.vue'
import NotifierToast from '@/plugins/vuetify-notifier/components/NotifierToast.vue'
import NotifierComponent from '@/plugins/vuetify-notifier/components/NotifierComponent.vue'
import { NotifierInstance } from '@/types'
import { mountComponent } from '@/plugins/vuetify-notifier/utils'

export const NotifierSymbol: InjectionKey<NotifierInstance> = Symbol.for('vuetify:notifier')


export function createNotifier(app: App, globalOptions: any = {}) {
  const toast = (input: NotifierToastInput): Promise<ConfirmResult> => {
    input.options = mergeProps(defaultOptions.default, defaultOptions.toastOptions, globalOptions?.default as any, globalOptions?.toastOptions as any, input.options as any, { hideSubmit: true })

    return mountComponent({
      component: NotifierToast,
      app,
      input,
    })
  }

  const confirm = (input: NotifierConfirmInput): Promise<ConfirmResult> => {
    input.options = mergeProps(defaultOptions.default, defaultOptions.dialogOptions, globalOptions?.default as any, globalOptions?.dialogOptions as any, input.options as any)

    return mountComponent({
      component: NotifierDialog,
      app,
      input,
    })
  }

  const prompt = (input: NotifierConfirmInput): Promise<ConfirmResult> => {
    input.options = mergeProps(defaultOptions.default, defaultOptions.dialogOptions, globalOptions?.default as any, globalOptions?.dialogOptions as any, input.options as any, { showInput: true })

    return mountComponent({
      component: NotifierDialog,
      app,
      input,
    })
  }

  const alert = (input: NotifierConfirmInput): Promise<ConfirmResult> => {
    input.options = mergeProps(defaultOptions.default, defaultOptions.dialogOptions, globalOptions?.default as any, globalOptions?.dialogOptions as any, input.options as any, { hideCancel: true })

    return mountComponent({
      component: NotifierDialog,
      app,
      input,
    })
  }

  const component = (input: NotifierConfirmInput): Promise<ConfirmResult> => {
    input.options = mergeProps(defaultOptions.default, defaultOptions.componentOptions, globalOptions?.default as any, globalOptions?.componentOptions as any, input.options as any)

    return mountComponent({
      component: NotifierComponent,
      app,
      input,
    })
  }

  return {
    confirm,

    toast,

    alert,

    prompt,

    component,
  }
}

export function useNotifier(): NotifierInstance {
  const vm = getCurrentInstance()
  if (!vm) {
    throw new Error(`[Vuetify Notifier] useNotifier() must be called from inside a setup function`)
  }

  const notifier = inject(NotifierSymbol)

  if (!notifier) throw new Error('[Vuetify Notifier] Could not find Notifier injection')

  return notifier
}
