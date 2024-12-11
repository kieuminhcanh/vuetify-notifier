import type { NotifierOptions } from './runtime/types'

export const defaults: NotifierOptions = {
  dialog: {
    width: 400,
  },
  confirm: {
    width: 400,
  },
  alert: {
    width: 400,
  },
  toast: {
    location: 'top right',
    timeout: 5000,
    max: 5,
    width: 400,
    sequentialClosing: false,
  },
}
