export default defineNuxtConfig({
  modules: ['@nuxtjs/i18n', '@nuxt/content'],
  devtools: { enabled: false },
  css: ['~/assets/site.css'],
  content: {
    experimental: { sqliteConnector: 'native' },
  },
  i18n: {
    baseUrl: 'https://23-17.leitwolf11.workers.dev',
    defaultLocale: 'en',
    strategy: 'prefix_except_default',
    detectBrowserLanguage: false,
    locales: [
      { code: 'en', language: 'en-US', name: 'English' },
      { code: 'de', language: 'de-DE', name: 'Deutsch' },
      { code: 'fr', language: 'fr-FR', name: 'Français' },
    ],
  },
  nitro: {
    prerender: {
      routes: ['/', '/de', '/fr'],
      failOnError: true,
    },
  },
})
