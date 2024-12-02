import { createApp } from 'vue'
import App from './App.vue'
import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import * as labsComponents from 'vuetify/labs/components'

import VuetifyNotifier from "vuetify-notifier";

const vuetify = createVuetify({
  components:{
    ...components,
    ...labsComponents
  },
  directives
})

createApp(App).use(vuetify).use(VuetifyNotifier).mount('#app')
