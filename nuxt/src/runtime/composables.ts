// // @ts-ignore
// import { useNotifier } from "../vuetify-notifier";

// export { useNotifier };

// @ts-ignore
import { useNuxtApp } from '#app'

export const useNotifier = () => useNuxtApp().$notifier
