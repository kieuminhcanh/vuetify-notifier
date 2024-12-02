import type { Component } from "vue"
import type { VDialog, VSnackbar } from "vuetify/components"
export { default } from "../notifier"
export { useNotifier } from './composables/useNotifier'

type DialogProps = NonNullable<InstanceType<typeof VDialog>['$props']>
type ToastProps = NonNullable<InstanceType<typeof VSnackbar>['$props']>

interface NotifierContent {
  title: string
  text: string
  color: string
}

interface NotifierAction {
  onSubmit?: (data: any) => void
  onClose?: () => void
}

interface Notifier extends NotifierContent, NotifierAction { }

export type DialogOptions = NotifierAction & {
  options: DialogProps & {
    title?: string
    [key: string]: any
  }
}


export type ToastOptions = Notifier & {
  options: ToastProps
}

export interface ConfirmOptions extends Notifier {
  options: DialogProps & Partial<{
    divider: boolean,
    textAlign: 'left' | 'center' | 'right',
    buttonAlign: 'start' | 'center' | 'end',
  }>
}

export type AlertOptions = Omit<ConfirmOptions, 'onClose'> & {
  isConfirm?: boolean
}

export type ComponentProps<T> =
  T extends new () => { $props: infer P } ? NonNullable<P> :
  T extends (props: infer P, ...args: any) => any ? P :
  {}
