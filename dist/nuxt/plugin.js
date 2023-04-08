// @ts-ignore: resolved with Nuxt
import { defineNuxtPlugin } from '#app';

// @ts-ignore: 
import vuetifyNotifier, { createNotifier } from "../vuetify-notifier";

// @ts-ignore
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(vuetifyNotifier)
  return {
    provide: { notifier: createNotifier(nuxtApp.vueApp) },
  };
});
