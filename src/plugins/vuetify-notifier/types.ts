/* eslint-disable*/
import type { App, Component, ComponentInternalInstance } from 'vue'



export interface VNode {
  ctx: ComponentInternalInstance | null
}


export { VuetifyNotifier, useNotifier, createNotifier } from './index'

export interface NotifierInstance {
  toast(input: NotifierToastInput): Promise<boolean>
  confirm(input: NotifierConfirmInput): Promise<boolean>
  prompt(input: NotifierConfirmInput): Promise<string>
  alert(input: NotifierConfirmInput): Promise<boolean>
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

export interface NotifierComponent {
  title?: string
  component?: string
}

export type ConfirmResult = boolean | string | object | any
