
// @ts-ignore
import { defineNuxtPlugin, useRuntimeConfig } from '#app';

// @ts-ignore
import VuetifyNotifier, { createNotifier } from "vuetify-notifier";


export default defineNuxtPlugin((nuxtApp: any) => {

  const config = useRuntimeConfig()

  nuxtApp.vueApp.use(VuetifyNotifier, config.public.notifier)

  return {
    provide: { notifier: createNotifier(nuxtApp.vueApp, config.public.notifier) },
  };
});
