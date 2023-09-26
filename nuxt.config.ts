export default defineNuxtConfig({
  ssr: true,
  nitro: {
    prerender: {
      crawlLinks: true,
    },
  },
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-icon',
    'nuxt-swiper',
    'nuxt-simple-robots',
  ],
  runtimeConfig: {
    public: {
      baseURL: process.env.BASE_URL,
    },
  },
});
