import type { Component } from "vue"

declare module 'vue' {
  interface ComponentCustomProperties {
    $notifier: Notifier
  }
}

declare module '#app' {
  interface NuxtApp {
    $notifier: Notifier
  }
}

export interface VNode {
  ctx: ComponentInternalInstance | null
}

export interface NotifierInstance {
  toast(input: NotifierToastInput): Promise<ConfirmResult>
  
  confirm(input: NotifierConfirmInput): Promise<ConfirmResult>

  prompt(input: NotifierConfirmInput): Promise<ConfirmResult>

  alert(input: NotifierConfirmInput): Promise<ConfirmResult>

  component(input: NotifierComponentInput): Promise<any>
}

export interface NotifierToastInput {
  title?: string
  text?: string
  status?: string
  options?: Record<string, any>
  onSubmit?: Function
  onCancel?: Function
  [key: string]: any
}

export interface NotifierConfirmInput {
  title?: string
  text?: string
  status?: string
  options?: Record<string, any>
  contentOptions?: Record<string, any>
  primaryButtonText?: string
  secondaryButtonText?: string
  onSubmit?: Function
  onCancel?: Function
  [key: string]: any
}

export interface NotifierComponentInput {
  title?: string  
  component?: string | Component
  options?: Record<string, any>    
  status?: string
  onSubmit?: Function
  onCancel?: Function
  [key: string]: any
}

export interface NotifierOptions {
  default?: Record<string, any>
  dialogOptions?: Record<string, any>
  toastOptions?: Record<string, any>
  componentOptions?: Record<string, any>
}


export interface NotifierMountComponent {
  app: App
  component: Component
  input: Record<string, any>
}

export interface NotifierDialogOptions extends NotifierDefaultOptions {
  transition?: string
  width?: number | string
  minWidth?: number | string
  minHeight?: number | string
  textAlign?: 'start' | 'center' | 'end'
  duration?: number
  defaultColor?: string
  defaultIcon?: string
  successIcon?: string
  infoIcon?: string
  warningIcon?: string
  errorIcon?: string
  showDivider?: boolean
  primaryButtonText?: string
  secondaryButtonText?: string

  dialogProps?: Record<string, any>
  cardProps?: Record<string, any>

  buttonProps?: Record<string, any>
  primaryButtonProps?: Record<string, any>
  secondaryButtonProps?: Record<string, any>

  handleCancel?: 'resolve' | 'reject' | 'silent'
  inputProps?: Record<string, any>

  prompt?: boolean
  alert?: boolean
}

export interface NotifierToastOptions extends NotifierDefaultOptions {
  defaultColor?: string
  defaultIcon?: string
  successIcon?: string
  infoIcon?: string
  warningIcon?: string
  errorIcon?: string
  closeIcon?: string

  toastProps?: Record<string, string | number | boolean>
}

export interface NotifierComponentOptions extends NotifierDefaultOptions {
  transition?: string
  width?: number | string
  height?: number | string
  fullscreen?: boolean
  dialogProps?: Record<string, string | number | boolean>
  componentProps?: Record<string, string | number | boolean | object>
  existsButton?: boolean
  [key: string]: any
}

export interface NotifierComponent {
  title?: string
  component?: string
}

export type ConfirmResult = boolean | string | object | any

export interface NuxtNotifierConfig {
  dialog?: NotifierDialogOptions
  toast?: NotifierToastOptions
}
