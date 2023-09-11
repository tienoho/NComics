export default defineNuxtConfig({
  ssr: true,
  nitro: {
    prerender: true
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
