<script setup>

defineProps({
    title: {
        typeof: String,
        required: true
    },
    subtitle: {
        typeof: String
    }
})

</script>

<template>
  <hgroup>
    <h1>
      {{ title }}
    </h1>
    <h3>
      {{ subtitle }}
    </h3>
  </hgroup>
</template>

<style scoped>
h1 {
  @apply text-white font-rubik text-lg font-normal mt-10
}

h3 {
    @apply text-[#bfbfbf] font-inter text-sm font-normal mt-[6px]
}
</style>