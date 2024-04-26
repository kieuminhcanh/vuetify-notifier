/* eslint-disable*/
import type { App, Component, ComponentInternalInstance } from 'vue'

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

export interface NotifierComponent {
  title?: string
  component?: string
}

export type ConfirmResult = boolean | string | object | any
