// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  nitro: {
    routeRules: {
      "/": { static: true },
    },
    prerender: {
      // crawlLinks: true,
      routes: ["/"],
    },
  },
});
