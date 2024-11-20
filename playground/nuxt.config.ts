export default defineNuxtConfig({
  modules: [
    '../src/module',
    'vuetify-nuxt-module',
  ],

  vuetify: {
    vuetifyOptions: {
      theme: {
        defaultTheme: 'dark'
      },
      directives: true
    }
  },

  vuetifier: {},
  devtools: { enabled: true },
  compatibilityDate: '2024-11-17',
})
