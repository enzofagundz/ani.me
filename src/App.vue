<script setup>
import { RouterView } from 'vue-router'
import { NavbarComponent } from './components'
</script>

<template>
  <NavbarComponent />

    <!-- <RouterLink to="/">Home</RouterLink> -->
    <main>
      <RouterView />
    </main>

</template>

<style scoped>
main {
  @apply max-w-sm mx-auto;
}
</style>