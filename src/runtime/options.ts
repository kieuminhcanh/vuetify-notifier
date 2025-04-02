import type { NotifierOptions } from './types'

export const defaults: NotifierOptions = {
  dialog: {
    width: 400,
  },
  confirm: {
    width: 400,
    isConfirm: true,
  },
  alert: {
    width: 400,
    isConfirm: false,
  },
  toast: {
    location: 'top right',
    timeout: 5000,
    max: 5,
    width: 400,
    sequentialClosing: false,
    closeButton: {
      icon: '$close',
      size: 'small',
      variant: 'text',
    },
  },
  quick: {
    input: {
      width: 350,
    },
    confirm: {
      width: 350,
    },
    submitButton: {
      icon: '$success',
      variant: 'text',
    },
  },
}
