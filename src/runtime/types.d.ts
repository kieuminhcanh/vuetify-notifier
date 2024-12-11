import type { VAlert, VDialog } from 'vuetify/components'
import { useNotifier } from './composables/useNotifier'

export { default } from '../plugin'
export { useNotifier }
interface NotifierContent {
  title: string
  text: string
  color: string
  icon: string
}

interface NotifierAction {
  onSubmit?: (data: any) => void
  onClose?: () => void
}

export interface Notifier extends NotifierContent, NotifierAction { }

export type DialogOptions = NotifierAction & {
  options: ComponentProps<VDialog> & {
    title?: string
    [key: string]: any
  }
}

export type ToastOptions = Notifier & {
  type?: 'info' | 'success' | 'error' | 'warning'
  options?: ComponentProps<VAlert>
}

export interface ConfirmOptions extends Notifier {
  options: ComponentProps<VDialog> & Partial<{
    divider: boolean
    textAlign: 'left' | 'center' | 'right'
    buttonAlign: 'start' | 'center' | 'end'
  }>
}

export type AlertOptions = Omit<ConfirmOptions, 'onClose'> & {
  isConfirm?: boolean
}

export type NotifierOptions = {
  toast: {
    location: 'top' | 'bottom' | 'top left' | 'top right' | 'bottom left' | 'bottom right'
    timeout: number
    max: number
    width: number
  }
  alert: {
    width: number
  }
  confirm: {
    width: number
  }
  dialog: {
    width: number
  }
}

export type ComponentProps<T> =
  T extends new () => { $props: infer P } ? NonNullable<P> :
    T extends (props: infer P, ...args: any) => any ? P : {}
