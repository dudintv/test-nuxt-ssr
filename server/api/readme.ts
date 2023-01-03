export default defineEventHandler(async (event) => {
  const response = await $fetch("https://raw.githubusercontent.com/dudintv/test-nuxt-ssr/main/README.md");
  return response;
});
