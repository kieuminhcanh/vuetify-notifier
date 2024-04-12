import { createApp } from 'vue'
import vuetifyNotifier from './plugins/vuetify-notifier'

import App from './App.vue'
import { createVuetify } from 'vuetify'

import 'vuetify/styles'

const vuetify = createVuetify({
  theme:{
    defaultTheme: 'dark',
  },
})

createApp(App).use(vuetify).use(vuetifyNotifier).mount('#app')
