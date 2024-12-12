// https://github.com/nuxt-themes/docus/blob/main/nuxt.schema.ts
export default defineAppConfig({
  docus: {
    title: 'Vuetify Notifier',
    description: 'Effortless Notifications & Dialogs for Vuetify.',
    image: 'https://github.com/user-attachments/assets/6964387d-b685-4d8c-b5a3-e11d7ce9335b',
    socials: {      
      github: 'kieuminhcanh/vuetify-notifier',      
    },
    github: {
      dir: 'content',
      branch: 'docs',
      repo: 'vuetify-notifier',
      owner: 'kieuminhcanh',
      edit: true
    },
    aside: {
      level: 0,
      collapsed: false,
      exclude: []
    },
    main: {
      padded: true,
      fluid: false
    },
    header: {
      logo: false,
      showLinkIcon: true,
      exclude: [],
      fluid: true
    }
  }
})
