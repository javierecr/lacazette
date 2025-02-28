// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['~/assets/css/typefaces.css', '~/assets/css/main.css'],
  modules: ['@nuxt/image'],
  app: {
    head: {
      titleTemplate: '%s %separator %siteName',
      templateParams: {
        separator: '–',
        siteName: 'LACAZETTE',
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'format-detection', content: 'telephone=no' },
        {
          name: 'description',
          content:
            'VISUAL INNOVATION AND EXPERIENCES. FOR WORLD CLASS ARTISTS AND BRANDS.',
        },
        { property: 'og:title', content: 'LACAZETTE' },
        {
          property: 'og:description',
          content:
            'VISUAL INNOVATION AND EXPERIENCES. FOR WORLD CLASS ARTISTS AND BRANDS.',
        },
        { property: 'og:url', content: 'https://lacazette.xyz' },
        { property: 'og:type', content: 'website' },
      ],
      htmlAttrs: {
        lang: 'en',
      },
    },
  },
});
