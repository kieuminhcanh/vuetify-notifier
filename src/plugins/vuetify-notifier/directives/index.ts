import NotifierMenu from '@/plugins/vuetify-notifier/components/NotifierMenu.vue'

export const vNotifierConfirm = useDirectiveComponent(NotifierMenu)
export const vNotifierInput = useDirectiveComponent(NotifierMenu, { options: { width: 350, showInput: true } })
