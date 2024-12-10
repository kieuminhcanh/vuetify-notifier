import '@mdi/font/css/materialdesignicons.css'
import { createApp } from 'vue'
import { createVuetify } from 'vuetify'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import VuetifyNotifier from 'vuetify-notifier'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import * as labsComponents from 'vuetify/labs/components'
import 'vuetify/styles'
import App from './App.vue'

const vuetify = createVuetify({
  components: {
    ...components,
    ...labsComponents,
  },
  directives,
})

createApp(App).use(vuetify).use(VuetifyNotifier).mount('#app')
