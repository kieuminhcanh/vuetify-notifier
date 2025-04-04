// @ts-expect-error vuetify do not export this type by default
import { useDirectiveComponent } from 'vuetify/lib/composables/directiveComponent.mjs'
import NotifierMenu from '../components/NotifierMenu.vue'
import NotifierMenuInput from '../components/NotifierMenuInput.vue'

export const vNotifierConfirm = useDirectiveComponent(NotifierMenu)
export const vNotifierInput = useDirectiveComponent(NotifierMenuInput)
