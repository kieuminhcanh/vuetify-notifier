import { Component } from "vue";
import { DefineComponent } from "vue";

// @ts-ignore
declare module '@nuxt/types' {
  interface NuxtAppOptions {
    $notifier: Notifier;
  }

  interface Context {
    $notifier: Notifier;
  }

  interface NuxtApp {
    $notifier: Notifier;
  }
}

export interface AlertOptions {
  type?: 'success' | 'info' | 'warning' | 'error';
  duration?: number;
}

export interface Alert {
  show: (message: string, options?: AlertOptions) => void;
  hide: () => void;
}


export interface NotifierDialogOptions {
  transition?: string;
  width?: number | string;
  minWidth?: number | string;
  minHeight?: number | string;
  textAlign?: "start" | "center" | "end";
  duration?: number;
  defaultColor?: string,
  defaultIcon?: string,
  successIcon?: string,
  infoIcon?: string,
  warningIcon?: string,
  errorIcon?: string,
  showDivider?: boolean,
  primaryButtonText?: string,
  secondaryButtonText?: string,

  dialogProps?: Record<string, any>,
  cardProps?: Record<string, any>,

  buttonProps?: Record<string, any>,
  primaryButtonProps?: Record<string, any>,
  secondaryButtonProps?: Record<string, any>,

  handleCancel?: 'resolve' | 'reject' | 'silent',
  prompt?: boolean,
  inputProps?: Record<string, any>,

  alert?: boolean,
}

export interface NotifierToastOptions {
  defaultColor?: string,
  defaultIcon?: string,
  successIcon?: string,
  infoIcon?: string,
  warningIcon?: string,
  errorIcon?: string,

  toastProps?: Record<string, string | number | boolean>,
}

export interface NotifierComponentOptions {
  transition?: string;
  width?: number | string;
  height?: number | string;
  dialogProps?: Record<string, string | number | boolean>,
  componentProps?: Record<string, string | number | boolean | object>,
  existsButton?: boolean,
}

export interface Notifier {
  confirm(content: string | NotifierContent, status?: string, options?: NotifierDialogOptions): Promise<ConfirmResult> | { success: Promise<ConfirmResult> };
  confirmSuccess(content: string | NotifierContent, options?: NotifierDialogOptions): Promise<ConfirmResult> | { success: Promise<ConfirmResult> };
  confirmInfo(content: string | NotifierContent, options?: NotifierDialogOptions): Promise<ConfirmResult> | { success: Promise<ConfirmResult> };
  confirmWarning(content: string | NotifierContent, options?: NotifierDialogOptions): Promise<ConfirmResult> | { success: Promise<ConfirmResult> };
  confirmError(content: string | NotifierContent, options?: NotifierDialogOptions): Promise<ConfirmResult> | { success: Promise<ConfirmResult> };
  prompt(content: string | NotifierContent, status?: string, options?: NotifierDialogOptions): Promise<ConfirmResult> | { success: Promise<ConfirmResult> };
  alert(content: string | NotifierContent, status?: string, options?: NotifierDialogOptions): Promise<ConfirmResult> | { success: Promise<ConfirmResult> };
  toast(content: string | NotifierContent, status?: string, options?: NotifierToastOptions): void;
  component(content: string | NotifierContent | Component, options?: NotifierComponentOptions): void;

}

export interface NotifierContent {
  title?: string;
  text?: string;
}

export interface NotifierComponent {
  title?: string;
  component?: string;
}

export type ConfirmResult = boolean | string | object | any;

export interface NuxtNotifierConfig {
  dialog?: NotifierDialogOptions;
  toast?: NotifierToastOptions;
}
