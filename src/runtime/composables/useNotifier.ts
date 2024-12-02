
import { getCurrentInstance, h, render, resolveComponent } from 'vue'
import { defu } from 'defu'

import type { Component } from "vue"
import type { AlertOptions, ComponentProps, ConfirmOptions, DialogOptions, ToastOptions } from '../types'

import { defaultOptions } from '../utils'
import NotifierToast from "../components/NotifierToast.vue"
import NotifierConfirm from "../components/NotifierConfirm.vue"
import NotifierComponent from "../components/NotifierComponent.vue"
export const useNotifier = (_options: any = {}) => {
  const v = getCurrentInstance()
  if (!v) {
    throw new Error(`[Notifier] useNotifier() must be called from inside a setup function`)
  }

  function show(component: Component, options: any) {

    const vnode = h(component, {
      ...options,
      onSubmit: options.onSubmit,
      onClose: options.onClose,
    })
    vnode.key = `${component.name}-${Math.random()}`
    const el = document.querySelector(options.to || '#notifier')

    if (v && el) {
      vnode.appContext = v.appContext
      render(vnode, el)
    }
  }

  function dialog<T extends Component | string>(component: T, options: Partial<ComponentProps<T> & DialogOptions> = {}) {
    const concreteComponent = typeof component === 'string' ? resolveComponent(component) : component
    return show(NotifierComponent, {
      component: concreteComponent as Component,
      ...options,
    })
  }

  function toast(options: Partial<ToastOptions> = {}) {
    return show(NotifierToast, defu(defaultOptions.toast, options))
  }

  function confirm(options: Partial<ConfirmOptions> = {}) {
    return show(NotifierConfirm, defu(defaultOptions.confirm, options))
  }

  function alert(options: Partial<AlertOptions> = {}) {
    return show(NotifierConfirm, defu(defaultOptions.alert, options, { isConfirm: false }))
  }

  return {
    dialog,
    toast,
    confirm,
    alert,
  }
}
