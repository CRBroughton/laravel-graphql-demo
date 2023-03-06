<script setup lang="ts">
import asyncComponent from './components/asyncComponent.vue'
</script>

<template>
  <Suspense>
    <template #default>
      <asyncComponent />
    </template>
    <template #fallback>
      <span>Loading...</span>
    </template>
  </Suspense>
 </template>
<style scoped>

</style>