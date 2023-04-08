import { createApp } from 'vue'
import { createVuetify } from 'vuetify'
import App from './App.vue'
import VuetifyNotifier from './plugins/vuetify-notifier';
import { NotifierDefaultOptions, NotifierOptions } from './plugins/vuetify-notifier/types';
import 'vuetify/styles'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import GlobalComponent from './components/GlobalComponent.vue';

const vuetify = createVuetify({ components, directives, })

const app = createApp(App);

app.component('global-component', GlobalComponent);
app.use(vuetify);
app.use(VuetifyNotifier, {
  default: {
    defaultColor:"red"
  },  

} as NotifierOptions);
app.mount('#app');
