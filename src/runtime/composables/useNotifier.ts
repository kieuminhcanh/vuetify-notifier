import { on } from 'events'
import { createApp, getCurrentInstance, h, ref, render, resolveComponent, useId, type Component, type InjectionKey } from 'vue'
import NotifierToast from "../components/NotifierToast.vue"
import NotifierConfirm from "../components/NotifierConfirm.vue"

import type { VDialog } from "vuetify/components/VDialog"

interface Notifier {
  onSubmit: (data: any) => void
  onCancel: () => void
}
interface ComponentOptions extends VDialog, Notifier {
  to: string
}

interface ToastOptions extends Notifier {
  title: string
  text: string
}

type ConfirmOptions = ToastOptions
type AlertOptions = Omit<ConfirmOptions, 'onCancel'> & {
  isConfirm?: boolean
}

export const useNotifier = () => {
  const v = getCurrentInstance()

  function show(component: Component, options: any) {
    const vnode = h(component, {
      ...options,
      onSubmit: options.onSubmit,
      onCancel: options.onCancel,
    })
    vnode.key = `${component.name}-${Math.random()}`
    const el = document.querySelector(options.to || '#notifier')

    if (v && el) {
      vnode.appContext = v.appContext
      render(vnode, el)
    }
  }

  function dialog(component: string| Component, options: Partial<ComponentOptions>) {
    const concreteComponent = typeof component === 'string' ? resolveComponent(component) : component
    return show(concreteComponent as Component, {
      ...options,
    })
  }

  function toast(options: Partial<ToastOptions>) {
    return show(NotifierToast, {
      ...options,
    })
  }

  function confirm(options: Partial<ConfirmOptions>) {
    return show(NotifierConfirm, {
      ...options,
    })
  }

  function alert(options: Partial<AlertOptions>) {
    return show(NotifierConfirm, {
      ...options,
      isConfirm: false,
    })
  }

  return {
    dialog,
    toast,
    confirm,
    alert,
  }
}
