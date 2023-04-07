import { Notifier } from "./index";

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
