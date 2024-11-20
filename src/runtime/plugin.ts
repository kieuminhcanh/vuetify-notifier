import { defineNuxtPlugin } from '#app'
import type { DirectiveBinding } from 'vue'
import { vNotifierConfirm,vNotifierInput } from './directives'



export default defineNuxtPlugin((_nuxtApp) => {
  _nuxtApp.vueApp.directive('notifier-confirm', vNotifierConfirm)
  _nuxtApp.vueApp.directive('notifier-input', vNotifierInput)
})
