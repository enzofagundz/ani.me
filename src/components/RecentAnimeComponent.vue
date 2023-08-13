<script setup>
import { useAnimesStore } from '@/stores/animes'
import { CardAnimeComponent, SectionTitleComponent } from '.';

const animesStore = useAnimesStore()
</script>

<template>
    <section>
        <SectionTitleComponent title="Animes Recentes" />
        <ul>
            <li
                v-for="anime in animesStore.recentAnimes"
                :key="anime.id"
            >
               <router-link :to="{name: 'anime', params: {id: anime.id}}">
                 <CardAnimeComponent :anime="anime"/>
               </router-link>
            </li>
        </ul>
    </section>
</template>

<style scoped>
section {
  @apply mt-10 mb-7 mx-auto max-w-sm
}

ul {
  @apply grid grid-cols-2 list-none gap-8 -ml-10 mt-7 place-content-center
}

li a{
  @apply flex flex-col justify-center w-full items-center no-underline
}

</style>