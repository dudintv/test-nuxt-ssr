// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  routeRules: {
    "/": { static: true, prerender: true, swr: true },
  },
  nitro: {
    prerender: {
      crawlLinks: false,
      routes: ["/"],
    },
  },
});
