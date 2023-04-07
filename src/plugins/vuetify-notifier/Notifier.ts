import { App, createApp, getCurrentInstance } from 'vue';
import ConfirmDialogComponent from './NotifierDialog.vue';
import NotifierToast from "./NotifierToast.vue";
import { NotifierDialogOptions, ConfirmResult, Notifier, NotifierContent, NotifierToastOptions, NotifierComponentOptions, NotifierComponent } from './types';
import { dialogDefaultOptions, toastDefaultOptions, componentDefaultOptions } from "./DefaultOptions";
import NotifierComponentVue from './NotifierComponent.vue';
import { Component } from 'vue';

import { inject } from 'vue';
import { InjectionKey } from 'vue';

export const NotifierSymbol: InjectionKey<Notifier> = Symbol.for('vuetify:notifier')

export function createNotifier(app: App): Notifier {

  const confirm = (content: string | NotifierContent, status = 'default', options: NotifierDialogOptions = {}): Promise<ConfirmResult> => {
    const vApp = document.querySelector('[data-v-app]') as HTMLElement;
    const container = document.createElement('div');

    const newOptions = { ...dialogDefaultOptions, ...options }

    return new Promise((resolve, reject) => {
      const notifierDialogApp = createApp(ConfirmDialogComponent, {
        content,
        status,
        options: newOptions,
        onSubmit(value: any) {
          resolve(value);
          setTimeout(() => {
            notifierDialogApp.unmount();
            vApp.removeChild(container)
          }, 500);
        },
        onCancel() {
          switch (newOptions.handleCancel) {
            case 'resolve':
              resolve(false);
              break;
            case 'reject':
              reject(false);
              break;
          }
          setTimeout(() => {
            notifierDialogApp.unmount();
            vApp.removeChild(container)
          }, 500);

        },
      });


      Object.assign(notifierDialogApp._context, app._context)
      vApp?.appendChild(container);
      notifierDialogApp.mount(container);

    });

  }

  const toast = (content: string | NotifierContent, status = 'default', options: NotifierToastOptions = {}): Promise<ConfirmResult> => {
    const vApp = document.querySelector('[data-v-app]') as HTMLElement;
    const container = document.createElement('div');

    const newOptions = { ...toastDefaultOptions, ...options }

    return new Promise((resolve) => {
      const notifierToastApp = createApp(NotifierToast, {
        content,
        status,
        options: newOptions,
        onSubmit(value: any) {
          resolve(value);
          setTimeout(() => {
            notifierToastApp.unmount();
            vApp.removeChild(container)
          }, 500);
        },
        onCancel() {
          setTimeout(() => {
            notifierToastApp.unmount();
            vApp.removeChild(container)
          }, 500);
        },
      });

      Object.assign(notifierToastApp._context, app._context)
      vApp?.appendChild(container);
      notifierToastApp.mount(container);
    });


  }

  const component = (content: string | Component | NotifierComponent, options: NotifierComponentOptions = {}): Promise<ConfirmResult> => {
    const vApp = document.querySelector('[data-v-app]') as HTMLElement;
    const container = document.createElement('div');

    const newOptions = { ...componentDefaultOptions, ...options }

    return new Promise((resolve) => {
      const notifierComponentApp = createApp(NotifierComponentVue, {
        content,
        status,
        options: newOptions,
        onSubmit(value: any) {
          resolve(value);
          setTimeout(() => {
            notifierComponentApp.unmount();
            vApp.removeChild(container)
          }, 500);
        },
        onCancel() {
          setTimeout(() => {
            notifierComponentApp.unmount();
            vApp.removeChild(container)
          }, 500);
        },
      });

      Object.assign(notifierComponentApp._context, app._context)
      vApp?.appendChild(container);
      notifierComponentApp.mount(container);
    });

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

  const prompt = (content: string | NotifierContent, status = 'default', options: NotifierDialogOptions = {}): Promise<ConfirmResult> => {
    return confirm(content, status, { ...options, ...{ prompt: true } });
  }

  const alert = (content: string | NotifierContent, status = 'default', options: NotifierDialogOptions = {}): Promise<ConfirmResult> => {
    return confirm(content, status, { ...options, ...{ secondaryButtonProps: { style: "display:none" } } });
  }




  return {
    confirm,
    confirmSuccess,
    confirmInfo,
    confirmWarning,
    confirmError,
    prompt,
    alert,
    toast,
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
