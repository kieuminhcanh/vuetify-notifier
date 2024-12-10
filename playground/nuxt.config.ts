export default defineNuxtConfig({
  modules: [
    // '../src/module',
    'vuetify-nuxt-module',
    'vuetify-notifier/nuxt',
  ],
  devtools: { enabled: true },
  compatibilityDate: '2024-11-17',
  notifier: {
  },

  vuetify: {
    vuetifyOptions: {
      theme: {
        defaultTheme: 'dark',
      },
      directives: true,
      labComponents: true,
    },
  },
})
