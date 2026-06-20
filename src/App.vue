<script setup>
import navbar from '/src/components/navbar.vue'
import footers from '/src/components/footer.vue'
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="grid-bg">
    <navbar />
    <RouterView />
    <footers />
  </div>
</template>

<style scoped></style>
