import { createNotifier } from '../index';

// @ts-ignore
export default defineNuxtPlugin((nuxtApp) => {
  return {
    provide: {
      notifier: createNotifier(nuxtApp.vueApp)
    },
  };
});
