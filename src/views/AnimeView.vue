<script setup>

import { useRoute } from 'vue-router';
const route = useRoute();

</script>

<template>
  <div>
    <h1>
      {{ route.query.id }}
    </h1>
  </div>
</template>

<style scoped>

</style>