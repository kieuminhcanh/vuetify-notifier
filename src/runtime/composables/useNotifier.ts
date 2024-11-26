import { createApp, getCurrentInstance, h, ref, render, resolveComponent, useId, type Component, type InjectionKey, mergeProps } from 'vue'
import NotifierToast from "../components/NotifierToast.vue"
import NotifierConfirm from "../components/NotifierConfirm.vue"

import type { VDialog } from "vuetify/components/VDialog"
import { useRuntimeConfig } from '#app'

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

const defaultOptions = {
  toast: {
  },
  confirm: {
    color: 'transparent',
    width: 400,
    submitButton: {
      color: 'primary',
    }
  },
  alert: {
    
    color: 'transparent',
    width: 400,
    submitButton: {
      color: 'primary',
    }
  },
}

export const useNotifier = () => {
  const v = getCurrentInstance()
  // const config = useRuntimeConfig()

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

  function dialog(component: string | Component, options: Partial<ComponentOptions>) {
    const concreteComponent = typeof component === 'string' ? resolveComponent(component) : component
    return show(concreteComponent as Component, {
      ...options,
    })
  }

  function toast(options: Partial<ToastOptions>) {
    return show(NotifierToast, mergeProps(defaultOptions.toast, options))
  }

  function confirm(options: Partial<ConfirmOptions>) {
    return show(NotifierConfirm, mergeProps(defaultOptions.confirm, options))
  }

  function alert(options: Partial<AlertOptions>) {
    return show(NotifierConfirm, mergeProps(defaultOptions.alert, options, { isConfirm: false }))
  }

  return {
    dialog,
    toast,
    confirm,
    alert,
  }
}
