// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  routeRules: {
    "/": { static: true },
  },
  // nitro: {
  //   prerender: {
  //     crawlLinks: false,
  //     routes: ["/"],
  //   },
  // },
});
