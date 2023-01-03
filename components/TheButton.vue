<script setup lang="ts"></script>

<template>
  <button class="the-button">
    <slot>button</slot>
  </button>
</template>

<style lang="scss" scoped>
.the-button {
  padding: 1rem 2rem;
  font-size: 1.2rem;
  background-color: coral;
  border-radius: 3rem;
  text-transform: uppercase;
}
</style>
