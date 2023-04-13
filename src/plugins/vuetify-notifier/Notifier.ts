import { App, createApp, getCurrentInstance, inject, InjectionKey, Component } from 'vue';
import { NotifierDialogOptions, ConfirmResult, Notifier, NotifierContent, NotifierToastOptions, NotifierComponentOptions, NotifierComponent, NotifierOptions } from './types';
import { defaultOptions } from "./utils/options";

import NotifierDialogComponentVue from './components/NotifierDialog.vue';
import NotifierToastComponentVue from "./components/NotifierToast.vue";
import NotifierComponentVue from './components/NotifierComponent.vue';

export const NotifierSymbol: InjectionKey<Notifier> = Symbol.for('vuetify:notifier')

import { mountComponent } from "./utils";

export function createNotifier(app: App, globalOptions: NotifierOptions = {}): Notifier {

  const confirm = (content: string | NotifierContent, status = 'default', opts?: NotifierDialogOptions): Promise<ConfirmResult> => {

    const options = { ...defaultOptions.default, ...defaultOptions.dialogOptions, ...globalOptions?.default, ...globalOptions?.dialogOptions, ...opts }

    return mountComponent({
      component: NotifierDialogComponentVue,
      app,
      content,
      status,
      options,
    })
  }

  const toast = (content: string | NotifierContent, status = 'default', opts: NotifierToastOptions = {}): Promise<ConfirmResult> => {

    const options = { ...defaultOptions.default, ...defaultOptions.toastOptions, ...globalOptions?.default, ...globalOptions?.toastOptions, ...opts }

    return mountComponent({
      component: NotifierToastComponentVue,
      app,
      content,
      status,
      options,
    })
  }


  const component = (content: string | Component | NotifierComponent, opts: NotifierComponentOptions = {}): Promise<ConfirmResult> => {

    const options = { ...defaultOptions.default, ...defaultOptions.componentOptions, ...globalOptions?.default, ...globalOptions?.componentOptions, ...opts }

    return mountComponent({
      component: NotifierComponentVue,
      app,
      content,
      status: 'default',
      options,
    })
  }

  const confirmSuccess = (content: string | NotifierContent, options: NotifierDialogOptions = {}): Promise<ConfirmResult> => {
    return confirm(content, 'success', options);
  }

  const confirmInfo = (content: string | NotifierContent, options: NotifierDialogOptions = {}): Promise<ConfirmResult> => {
    return confirm(content, 'info', options);
  }

  const confirmWarning = (content: string | NotifierContent, options: NotifierDialogOptions = {}): Promise<ConfirmResult> => {
    return confirm(content, 'warning', options);
  }

  const confirmError = (content: string | NotifierContent, options: NotifierDialogOptions = {}): Promise<ConfirmResult> => {
    return confirm(content, 'error', options);
  }

  const toastSuccess = (content: string | NotifierContent, options: NotifierToastOptions = {}): Promise<ConfirmResult> => {
    return toast(content, 'success', options);
  }

  const toastInfo = (content: string | NotifierContent, options: NotifierToastOptions = {}): Promise<ConfirmResult> => {
    return toast(content, 'info', options);
  }

  const toastWarning = (content: string | NotifierContent, options: NotifierToastOptions = {}): Promise<ConfirmResult> => {
    return toast(content, 'warning', options);
  }

  const toastError = (content: string | NotifierContent, options: NotifierToastOptions = {}): Promise<ConfirmResult> => {
    return toast(content, 'error', options);
  }

  const alert = (content: string | NotifierContent, status = 'default', options: NotifierDialogOptions = {}): Promise<ConfirmResult> => {
    return confirm(content, status, { ...options, ...{ secondaryButtonProps: { style: "display:none" } } });
  }

  const alertSuccess = (content: string | NotifierContent, options: NotifierDialogOptions = {}): Promise<ConfirmResult> => {
    return alert(content, 'success', options);
  }

  const alertInfo = (content: string | NotifierContent, options: NotifierDialogOptions = {}): Promise<ConfirmResult> => {
    return alert(content, 'info', options);
  }

  const alertWarning = (content: string | NotifierContent, options: NotifierDialogOptions = {}): Promise<ConfirmResult> => {
    return alert(content, 'warning', options);
  }

  const alertError = (content: string | NotifierContent, options: NotifierDialogOptions = {}): Promise<ConfirmResult> => {
    return alert(content, 'error', options);
  }

  const prompt = (content: string | NotifierContent, status = 'default', options: NotifierDialogOptions = {}): Promise<ConfirmResult> => {
    return confirm(content, status, { ...options, ...{ prompt: true } });
  }

  return {
    confirm,
    confirmSuccess,
    confirmInfo,
    confirmWarning,
    confirmError,

    toast,
    toastSuccess,
    toastInfo,
    toastWarning,
    toastError,

    alert,
    alertSuccess,
    alertInfo,
    alertWarning,
    alertError,

    prompt,

    component
  };

}

export function useNotifier() {

  const vm = getCurrentInstance()
  if (!vm) {
    throw new Error(`[Vuetify Notifier] useNotifier() must be called from inside a setup function`)
  }

  const notifier = inject(NotifierSymbol)

  if (!notifier) throw new Error('[Vuetify Notifier] Could not find Notifier injection')

  return notifier
}
