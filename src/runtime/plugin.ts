import { defineNuxtPlugin } from '#app'
import { vNotifierConfirm, vNotifierInput } from './directives'

export default defineNuxtPlugin(({ vueApp }) => {
  vueApp.directive('notifier-confirm', vNotifierConfirm)
  vueApp.directive('notifier-input', vNotifierInput)
})
