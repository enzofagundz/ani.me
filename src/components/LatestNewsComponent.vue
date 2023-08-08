<script setup>
import { NewsCardComponent } from '.';
</script>

<template>
    <header>
        <hgroup>
            <h1>
                Últimas novidades
            </h1>
            <h3>
                Confira as últimas novidades do mundo dos animes e mangás.
            </h3>
        </hgroup>
    </header>

    <NewsCardComponent />
</template>

<style scoped>
header {
    @apply max-w-sm mx-auto mt-12
}

h1 {
    @apply text-white font-rubik text-lg font-normal
}

h3 {
    @apply text-[#bfbfbf] font-inter text-sm font-normal mt-[6px]
}
</style>