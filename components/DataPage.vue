<script setup lang="ts">
const { data, refresh, pending } = await useAsyncData("/api/data", () => $fetch("/api/data"));
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
  </section>
</template>

<style lang="scss" scoped>
div {
  margin-bottom: 1rem;
}
</style>
