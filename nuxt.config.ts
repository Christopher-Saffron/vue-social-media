// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  pages: true,
  modules: [
    'nuxt-icon',
    '@nuxtjs/tailwindcss',
    // '@nuxtjs/supabase',
    '@pinia/nuxt',
    "@vite-pwa/nuxt",
],
runtimeConfig: {
  public: {
    bucketUrl: process.env.BUCKET_URL
  }
},
vite: {
  resolve: {
    alias: {
      '~': '/<path-to-your-src-folder>',
      '@': '/<path-to-your-src-folder>',
    },
  },
},
  devtools: { enabled: true }
})
