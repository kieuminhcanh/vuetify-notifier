
// @ts-ignore
import { defineNuxtPlugin } from '#app';

// @ts-ignore
import VuetifyNotifier, { createNotifier } from "vuetify-notifier";

export default defineNuxtPlugin((nuxtApp: any) => {
  nuxtApp.vueApp.use(VuetifyNotifier)
  return {
    provide: { notifier: createNotifier(nuxtApp.vueApp) },
  };
});
