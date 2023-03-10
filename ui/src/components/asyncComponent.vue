<script setup lang="ts">
import { useQuery } from '@urql/vue'
import { userQuery } from '../graphql/queries'

const { data, error } = await useQuery({
  query: userQuery,
  variables: {first: 10}
})
</script>

<template>
  <div v-if="error">
    There was an error {{ error }}
  </div>
  <div v-else>{{ data }}</div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
