import { defu } from 'defu'
import { getCurrentInstance, h, inject, render, resolveComponent } from 'vue'

import type { Component } from 'vue'
import type { AlertOptions, ComponentProps, ConfirmOptions, DialogOptions, NotifierOptions, ToastOptions } from '../types'

import { defaults } from '../../options'
import NotifierComponent from '../components/NotifierComponent.vue'
import NotifierConfirm from '../components/NotifierConfirm.vue'
import useToast from './useToast'

// export const NotifierSymbol: InjectionKey<ReturnType<typeof useNotifier>> = Symbol.for('vuetify:notifier')

export const useNotifier = (_options: any = {}) => {
  const v = getCurrentInstance()
  if (!v) {
    throw new Error(`[Notifier] useNotifier() must be called from inside a setup function`)
  }

  const config = inject('notifier') as NotifierOptions

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
    return show(NotifierComponent, defu(config.dialog, options, { component: concreteComponent }))
  }

  function toast(options: Partial<ToastOptions> = {}) {
    return useToast().add(options)
  }

  function confirm({ options, ...props }: Partial<ConfirmOptions> = {}) {
    return show(NotifierConfirm, { ...props, ...{ options: defu(options, defaults.confirm) } })
  }

  function alert({ options, ...props }: Partial<AlertOptions> = {}) {
    return show(NotifierConfirm, { ...props, ...{ options: defu(options, defaults.alert, { isConfirm: false }) } })
  }

  return {
    dialog,
    toast,
    confirm,
    alert,
    config,
  }
}
