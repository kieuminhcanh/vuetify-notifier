import { defineNuxtPlugin } from '#app'
import { vNotifierConfirm, vNotifierInput } from './directives'

export default defineNuxtPlugin(({ vueApp, $config }) => {
  vueApp.provide('notifier', $config.public.notifier)
  vueApp.directive('notifier-confirm', vNotifierConfirm)
  vueApp.directive('notifier-input', vNotifierInput)
})
