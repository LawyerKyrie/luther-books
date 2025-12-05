// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxt/ui',
    '@nuxt/content',
    '@vueuse/nuxt',
    'nuxt-og-image'
  ],
  css: ['~/assets/css/main.css'],
  routeRules: {
    '/docs': { redirect: '/docs/about', prerender: false }
  },
  compatibilityDate: '2024-07-11',
  nitro: {
    prerender: {
      routes: [
        '/'
      ],
      crawlLinks: true
    }
  },
  /* devtools: { enabled: true }, */
  typescript: {
    shim: false,
    strict: false,
    typeCheck: false
  },
  eslint: {
    config: {
      stylistic: {
        commaDangle: 'never',
        braceStyle: '1tbs'
      }
    }
  }
})
