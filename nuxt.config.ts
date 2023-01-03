// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  nitro: {
    routeRules: {
      "/": { static: true, prerender: true },
    },
    prerender: {
      crawlLinks: false,
      routes: ["/"],
    },
  },
});
