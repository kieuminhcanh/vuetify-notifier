import { NotifierOptions } from "../types";
import { NotifierComponentOptions, NotifierDefaultOptions, NotifierDialogOptions, NotifierToastOptions } from "../types";

export const defaultOptions: NotifierOptions = {
  default: {
    defaultColor: '',
    defaultIcon: 'mdi-alert-circle',
    successIcon: 'mdi-check-circle',
    infoIcon: 'mdi-information',
    warningIcon: 'mdi-alert',
    errorIcon: 'mdi-alert-circle',
  },
  dialogOptions: {
    transition: 'dialog-bottom-transition',
    width: 500,
    minWidth: 300,
    minHeight: 250,
    textAlign: 'center',
    primaryButtonText: 'OK',
    secondaryButtonText: 'Cancel',
    showDivider: true,
    buttonProps: {
      width: '100',
    },
    handleCancel: 'silent',
    inputProps: {
      label: 'Input',
    }
  },
  toastOptions: {
    toastProps: {
      transition: 'v-scroll-x-transition',
      location: 'top right',
    },
  },
  componentOptions: {
    existsButton: true,
  }
}
