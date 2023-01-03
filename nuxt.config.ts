// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  routeRules: {
    "/": { prerender: true },
  },
  nitro: {
    prerender: {
      crawlLinks: false,
      routes: ["/"],
    },
  },
});
