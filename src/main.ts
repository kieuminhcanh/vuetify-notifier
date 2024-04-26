import { createApp } from 'vue'
import App from './App.vue'
import vuetify from "@/plugins/vuetify";
import vuetifyNotifier from "@/plugins/vuetify-notifier";

createApp(App).use(vuetify).use(vuetifyNotifier).mount('#app')
