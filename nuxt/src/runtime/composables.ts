// @ts-ignore
import { useNuxtApp } from '#app'

import type { NotifierInstance } from "@/types";

export const useNotifier = (): NotifierInstance => useNuxtApp().$notifier as NotifierInstance;
