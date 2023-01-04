// import "@mdi/font/css/materialdesignicons.css";
// import "vuetify/styles";

// const vuetify = createVuetify({
//   ssr: true,
// });

import { createVuetify } from "vuetify";

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    ssr: true,
  });

  nuxtApp.vueApp.use(vuetify);
});
