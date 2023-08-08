<script setup>
const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'X', 'W', 'Y', 'Z']
</script>

<template>
    <nav>
        <ul>
            <li>
                <a href="#">Todos</a>
            </li>
            <li v-for="letter in letters" :key="letter">
                <a href="#">{{ letter }}</a>
            </li>
        </ul>
    </nav>
</template>

<style scoped>
nav {
    @apply max-w-sm mx-auto mt-9
}

nav ul {
    @apply flex justify-between items-center list-none space-x-8 overflow-x-scroll py-2
}

nav ul li {
    @apply flex justify-center items-center
}

nav ul li:first-child {
    @apply text-2xl bg-[#151b26] px-6 py-2 rounded-full -ml-10
}

nav ul li a {
    @apply no-underline text-sm text-white font-rubik cursor-pointer
}

::-webkit-scrollbar {
    @apply h-1 w-1 bg-[#151b26] rounded-full
}

::-webkit-scrollbar-thumb {
    @apply bg-[#00a3ff] rounded-full w-1/4
}
</style>