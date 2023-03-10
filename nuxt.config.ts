// https://nuxt.com/docs/api/configuration/nuxt-config

import vuetify from "vite-plugin-vuetify";

export default defineNuxtConfig({
  css: ["vuetify/styles"],
  vite: {
    ssr: {
      noExternal: ["vuetify"], // add the vuetify vite plugin
    },
  },
  modules: [
    "nuxt-purgecss",
    async (options, nuxt) => {
      nuxt.hooks.hook("vite:extendConfig", (config) => config.plugins.push(vuetify()));
    },
  ],
  nitro: {
    routeRules: {
      "/": { static: true },
    },
    prerender: {
      routes: ["/"],
    },
  },
});
