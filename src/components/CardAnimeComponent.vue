<script setup>

defineProps({
    anime: {
        type: Object,
        required: true
    }
})

</script>

<template>
    <img :src="anime.img" :alt="anime.name" /> 
    <p v-show="anime.ep">Episódio {{ anime.ep }}</p>
    <h2>{{ anime.name }}</h2>
</template>

<style scoped>

img {
    @apply w-full object-cover rounded-md
}

p {
    @apply text-[#bfbfbf] font-inter text-sm font-medium -mt-10
}

h2 {
    @apply text-white font-rubik text-lg font-normal mt-6
}
</style>