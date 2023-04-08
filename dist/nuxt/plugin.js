// @ts-ignore: resolved with Nuxt
import { defineNuxtPlugin } from '#app';

// @ts-ignore: 
import VuetifyNotifier, { createNotifier } from "../vuetify-notifier";

// @ts-ignore
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(VuetifyNotifier)
  return {
    provide: { notifier: createNotifier(nuxtApp.vueApp) },
  };
});
