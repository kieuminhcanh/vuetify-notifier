import { createApp } from 'vue'
import { createVuetify } from 'vuetify'
import App from './App.vue'
import VuetifyNotifier from './plugins/vuetify-notifier';
import 'vuetify/styles'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import GlobalComponent from './components/GlobalComponent.vue';

const vuetify = createVuetify({
  components,
  directives,
  defaults: {
    global: {

    }
  }
})

const app = createApp(App);

app.component('global-component', GlobalComponent);
app.use(vuetify);
app.use(VuetifyNotifier);
app.mount('#app');
