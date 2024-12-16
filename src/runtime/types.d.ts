import type { VBtn, VDialog, VListItem, VTextField } from 'vuetify/components'
import { useNotifier } from './composables/useNotifier'

export { default } from '../plugin'
export { useNotifier }
interface NotifierContent {
  title?: string
  text?: string
  color?: string
  icon?: string
}

interface NotifierAction {
  onSubmit?: (data: any) => void
  onClose?: () => void
}

export interface Notifier extends NotifierContent, NotifierAction { }

export type DialogOptions = NotifierAction & {
  options: ComponentProps<typeof VDialog> & {
    title?: string
    [key: string]: any
  }
}

export interface ToastOptions extends Omit<Notifier, 'onSubmit'> {
  type?: 'info' | 'success' | 'error' | 'warning'
  onClick?: () => void
  options?: {
    closeButton?: ComponentProps<typeof VBtn>
  }
}

export interface ToastItemOptions extends ToastOptions {
  notifierId?: number
  options: ToastOptions['options'] & {
    isPause?: boolean
    timeout?: number
    sequentialClosing?: boolean
  }
}

export interface ConfirmOptions extends Notifier {
  options: ComponentProps<typeof VDialog> & Partial<{
    divider: boolean
    width: number | string
    isConfirm: boolean
    textAlign: 'left' | 'center' | 'right'
    buttonAlign: 'start' | 'center' | 'end'
    submitButton: ComponentProps<typeof VBtn>
    closeButton: ComponentProps<typeof VBtn>
  }>
}

export type AlertOptions = Omit<ConfirmOptions, 'onClose'> & {

}

export type NotifierOptions = {
  toast: {
    location: 'top' | 'bottom' | 'top left' | 'top right' | 'bottom left' | 'bottom right'
    timeout: number
    max: number
    width: number
    sequentialClosing: boolean
    closeButton?: ComponentProps<typeof VBtn>
  }
  alert: {
    width: number
    isConfirm: boolean
    submitButton?: ComponentProps<typeof VBtn>
  }
  confirm: {
    width: number
    isConfirm: boolean
    submitButton?: ComponentProps<typeof VBtn>
    closeButton?: ComponentProps<typeof VBtn>
  }
  dialog: {
    width: number
  }
  quick: {
    confirm: ComponentProps<typeof VListItem>
    input: ComponentProps<typeof VTextField>
    submitButton?: ComponentProps<typeof VBtn>
    closeButton?: ComponentProps<typeof VBtn>
  }
}

export type ComponentProps<T> =
  T extends new () => { $props: infer P } ? NonNullable<P> :
    T extends (props: infer P, ...args: any) => any ? P : {}
