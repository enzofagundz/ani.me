<script setup>

import { useAnimesStore } from '@/stores/animes'
import { CardAnimeComponent, SectionTitleComponent } from '.';
const animesStore = useAnimesStore()

</script>

<template>
  <section>
    <SectionTitleComponent title="Últimas atualizações" />

    <ul>
      <li v-for="anime in animesStore.latestAnimes" :key="anime.id">
        <router-link :to="{name: 'anime', params: {id: anime.id}}">
          <CardAnimeComponent :anime="anime" />
        </router-link>
      </li>
    </ul>

    <button>
      Ver mais
    </button>
  </section>
</template>

<style scoped>
section {
  @apply mt-10 mb-7 mx-auto max-w-sm
}

ul {
  @apply grid grid-cols-2 list-none gap-8 -ml-10 mt-7
}

li a {
  @apply flex flex-col justify-center w-full items-center no-underline
}

button {
  @apply bg-[#151b26] w-full font-inter font-medium text-base text-white border-none py-4 mt-8 rounded-md cursor-pointer
}
</style>