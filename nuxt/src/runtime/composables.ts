// @ts-ignore
import { useNuxtApp } from '#app'

import type { NotifierInstance } from "@/plugins/vuetify-notifier/types";

export const useNotifier = (): NotifierInstance => useNuxtApp().$notifier as NotifierInstance;
