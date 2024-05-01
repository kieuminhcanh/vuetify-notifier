import { createApp } from 'vue'
import App from './App.vue'
import vuetify from '@/plugins/vuetify'
import { VuetifyNotifier } from 'vuetify-notifier'

createApp(App).use(vuetify).use(VuetifyNotifier).mount('#app')
