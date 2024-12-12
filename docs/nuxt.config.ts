export default defineNuxtConfig({
  extends: ['@nuxt-themes/docus'],
  modules: [
    'vuetify-nuxt-module',
    '../src/module',
  ],
  ssr: false,
  app: {
    baseURL: process.env.NODE_ENV === 'development' ? '' : '/vuetify-notifier/',
  },
  compatibilityDate: '2024-10-24',
  vuetify: {
    vuetifyOptions: {
      theme: {
        defaultTheme: 'dark',
      },
    },
  },
})
