import { App, Component } from 'vue'

import plugin from '../index'
export default plugin

export * from '../index'

declare module 'vue' {
  interface ComponentCustomProperties {
    $notifier: Notifier
  }
}

// @ts-ignore
declare module '#app' {
  interface NuxtApp {
    $notifier: Notifier
  }
}

export interface NotifierOptions {
  default?: NotifierDefaultOptions
  dialogOptions?: NotifierDialogOptions
  toastOptions?: NotifierToastOptions
  componentOptions?: NotifierComponentOptions
}

export interface NotifierDefaultOptions {
  defaultColor?: string
  defaultIcon?: string
  successIcon?: string
  infoIcon?: string
  warningIcon?: string
  errorIcon?: string
  closeIcon?: string
}

export interface NotifierMountComponent {
  component: Component
  app: App
  content: string | Component | NotifierContent
  status: string
  options: NotifierDialogOptions | NotifierToastOptions | NotifierComponentOptions
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
  [key:string]: any
}

export interface Notifier {
  confirm(content: string | NotifierContent, status?: string, options?: NotifierDialogOptions): Promise<ConfirmResult> | { success: Promise<ConfirmResult> }
  confirmSuccess(content: string | NotifierContent, options?: NotifierDialogOptions): Promise<ConfirmResult> | { success: Promise<ConfirmResult> }
  confirmInfo(content: string | NotifierContent, options?: NotifierDialogOptions): Promise<ConfirmResult> | { success: Promise<ConfirmResult> }
  confirmWarning(content: string | NotifierContent, options?: NotifierDialogOptions): Promise<ConfirmResult> | { success: Promise<ConfirmResult> }
  confirmError(content: string | NotifierContent, options?: NotifierDialogOptions): Promise<ConfirmResult> | { success: Promise<ConfirmResult> }

  toast(content: string | NotifierContent, status?: string, options?: NotifierToastOptions): void
  toastSuccess(content: string | NotifierContent, options?: NotifierToastOptions): Promise<ConfirmResult> | { success: Promise<ConfirmResult> }
  toastInfo(content: string | NotifierContent, options?: NotifierToastOptions): Promise<ConfirmResult> | { success: Promise<ConfirmResult> }
  toastWarning(content: string | NotifierContent, options?: NotifierToastOptions): Promise<ConfirmResult> | { success: Promise<ConfirmResult> }
  toastError(content: string | NotifierContent, options?: NotifierToastOptions): Promise<ConfirmResult> | { success: Promise<ConfirmResult> }

  alert(content: string | NotifierContent, status?: string, options?: NotifierDialogOptions): Promise<ConfirmResult> | { success: Promise<ConfirmResult> }
  alertSuccess(content: string | NotifierContent, options?: NotifierDialogOptions): Promise<ConfirmResult> | { success: Promise<ConfirmResult> }
  alertInfo(content: string | NotifierContent, options?: NotifierDialogOptions): Promise<ConfirmResult> | { success: Promise<ConfirmResult> }
  alertWarning(content: string | NotifierContent, options?: NotifierDialogOptions): Promise<ConfirmResult> | { success: Promise<ConfirmResult> }
  alertError(content: string | NotifierContent, options?: NotifierDialogOptions): Promise<ConfirmResult> | { success: Promise<ConfirmResult> }

  prompt(content: string | NotifierContent, status?: string, options?: NotifierDialogOptions): Promise<ConfirmResult> | { success: Promise<ConfirmResult> }

  component(content: string | NotifierContent | Component, options?: NotifierComponentOptions): Promise<any>
}

export interface NotifierContent {
  title?: string
  text?: string
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
