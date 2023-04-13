// @ts-ignore
import { useNuxtApp } from '#app'

import type { Notifier } from "../../types";

export const useNotifier = (): Notifier => useNuxtApp().$notifier as Notifier;
