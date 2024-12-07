export default defineNuxtConfig({
  modules: [
    '../src/module',
    'vuetify-nuxt-module',
    // 'vuetify-notifier/nuxt'
  ],

  vuetify: {
    vuetifyOptions: {
      theme: {
        defaultTheme: 'dark'
      },
      directives: true,
      labComponents: true,
    }
  },
  notifier: {  
  },
  devtools: { enabled: true },
  compatibilityDate: '2024-11-17',
})
