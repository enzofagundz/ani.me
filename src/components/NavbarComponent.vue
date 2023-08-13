<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
    <nav>
        <ul>
            <li>
                <RouterLink to="/">Ani.me</RouterLink>
            </li>
            <ul>
                <li>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path
                            d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z"
                            stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M20.9999 21L16.6499 16.65" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </li>
                <li>
                    <svg xmlns="http://www.w3.org/2000/svg" width="29" height="14" viewBox="0 0 29 14" fill="none">
                        <path d="M1 13H28" stroke="white" stroke-linecap="round" />
                        <path d="M1 7H28" stroke="white" stroke-linecap="round" />
                        <path d="M1 1H28" stroke="white" stroke-linecap="round" />
                    </svg>
                </li>
            </ul>
        </ul>
    </nav>
</template>

<style scoped>

nav {
    @apply max-w-sm mx-auto mt-6
}

nav ul {
    @apply flex justify-between items-center list-none
}

nav ul li {
    @apply flex items-center cursor-pointer
}

nav ul li:first-child a {
    @apply text-2xl text-[#00a3ff] cursor-pointer no-underline font-rubik font-bold -ml-10
}

nav ul > ul {
    @apply flex justify-between items-center list-none w-1/3
}
</style>