<script setup>
import { NewsCardComponent, SectionTitleComponent } from '.';
</script>

<template>
    <header>
        <SectionTitleComponent title="Últimas Notícias" subtitle="Confira as últimas novidades do mundo dos animes e mangás." />
    </header>

    <NewsCardComponent />
</template>

<style scoped>
header {
    @apply mt-12
}

</style>