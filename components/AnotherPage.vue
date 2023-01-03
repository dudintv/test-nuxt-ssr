<script setup lang="ts">
const {
  data: readmeData,
  refresh: refreshReadme,
  pending: pendingReadme,
  error: errorReadme,
} = await useAsyncData("/api/readme", () => $fetch("/api/readme"));
</script>

<template>
  <section>
    <h1>This is a not prerendered page</h1>
    <LoadingSpinner v-if="pendingReadme" />
    <span v-if="errorReadme" style="color: red">{{ errorReadme }}</span>
    <p>{{ readmeData }}</p>
    <TheButton @click="refreshReadme()">Refresh Readme</TheButton>
  </section>
</template>

<style lang="scss" scoped></style>
