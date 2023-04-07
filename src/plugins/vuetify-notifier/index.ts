import { App } from 'vue';
import { createNotifier } from './Notifier';
import { Notifier } from "./types";

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

export default {
  install: (app: App) => {
    app.provide('$notifier', createNotifier(app));
  },
};

export { createNotifier }
