// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/ui'],
  shiki: {
    defaultTheme: "github-dark"
  },
  css: ['~/assets/css/main.css'],
  ui: {
    colorMode: 'dark'
  }
})