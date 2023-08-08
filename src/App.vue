<script setup>
import { RouterView } from 'vue-router'
import { NavbarComponent } from './components'
</script>

<template>
  <NavbarComponent />

    <!-- <RouterLink to="/">Home</RouterLink> -->
    <RouterView />

</template>

<style scoped>

</style>