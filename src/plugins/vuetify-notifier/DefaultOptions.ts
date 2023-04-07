import { NotifierComponentOptions, NotifierDialogOptions, NotifierToastOptions } from "./types";

export const dialogDefaultOptions: NotifierDialogOptions = {
  transition: 'dialog-bottom-transition',
  width: 'auto',
  minWidth: 300,
  minHeight: 250,
  textAlign: 'center',
  duration: 1500,
  defaultColor: '',
  defaultIcon: 'mdi-alert-circle',
  successIcon: 'mdi-check-circle',
  infoIcon: 'mdi-information',
  warningIcon: 'mdi-alert',
  errorIcon: 'mdi-alert-circle',
  primaryButtonText: 'OK',
  secondaryButtonText: 'Cancel',
  showDivider: true,
  buttonProps: {
    width: '100',
  },
  dialogProps: {},
  cardProps: {},
  handleCancel: 'silent',
  inputProps: {
    label: 'Input',
    rules: [
      (v: string) => !!v || 'Name is required',
      (v: string | string[]) => (v && v.length <= 10) || 'Name must be less than 10 characters',
    ]
  }
}

export const toastDefaultOptions: NotifierToastOptions = {  
  defaultColor: 'primary',
  defaultIcon: 'mdi-alert-circle',
  successIcon: 'mdi-check-circle',
  infoIcon: 'mdi-information',
  warningIcon: 'mdi-alert',
  errorIcon: 'mdi-alert-circle',

  toastProps: {
    transition: 'v-scroll-x-transition',
    location: 'top right',
  },
}

export const componentDefaultOptions: NotifierComponentOptions = {  
  existsButton: true,
}
