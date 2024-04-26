import NotifierMenu from '@/plugins/vuetify-notifier/components/NotifierMenu.vue'

export const vNotifierMenu = useDirectiveComponent(NotifierMenu)
export const vNotifierMenuInput = useDirectiveComponent(NotifierMenu, { options: { width: 350, showInput: true } })
