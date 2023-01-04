<script setup lang="ts">
const { data, refresh, pending } = await useAsyncData("/api/data", () => $fetch("/api/data"));
const {
  data: readmeData,
  refresh: refreshReadme,
  pending: pendingReadme,
  error: errorReadme,
} = await useAsyncData("/api/readme", () => $fetch("/api/readme"));

const appConfig = useAppConfig();

onMounted(async () => {
  console.log("start prefetching");
  await preloadComponents("AnotherPage");
  await preloadRouteComponents("/another-page");
  console.log("stop prefetching");
});
</script>

<template>
  <section>
    <div style="display: flex">
      <LoadingSpinner v-if="pending" />
      <ul v-if="data">
        <li v-for="item of data.data" :key="item.id">{{ item.id }}: {{ item.name }}</li>
      </ul>
    </div>
    <TheButton @click="refresh()">Refresh</TheButton>

    <v-card elevation="12" class="ma-4 bg-primary">
      <template #title> Hello from Vuetify! </template>
      <v-card-text>
        When you see this inside a card, it worked!
        <pre>readmeData = {{ readmeData }}</pre>
        <LoadingSpinner v-if="pendingReadme" />
      </v-card-text>
    </v-card>
    <TheButton @click="refreshReadme()">Refresh Readme</TheButton>
    <span v-if="errorReadme" style="color: red">{{ errorReadme }}</span>
    <p>{{ appConfig }}</p>
  </section>
</template>

<style lang="scss" scoped>
div {
  margin-bottom: 1rem;
}
</style>
