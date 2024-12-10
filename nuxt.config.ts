export default defineNuxtConfig({
  // https://github.com/nuxt-themes/docus
  extends: ['@nuxt-themes/docus'],
  devtools: { enabled: false },

  app: {
    baseURL: process.env.NODE_ENV === 'development' ? '' : '/vuetify-notifier/'
  },

  modules: [
    'vuetify-nuxt-module',
    'vuetify-notifier/nuxt'
  ],
  compatibilityDate: '2024-10-24'
})