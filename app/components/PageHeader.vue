<script setup>
defineProps({
  title: {
    type: String,
    default: ''
  },
  description: {
    type: String,
    default: ''
  }
})
</script>

<template>
  <div>
    <h1 v-if="title" class="text-xl lg:text-2xl font-semibold">
      {{ title }}
    </h1>

    <p v-if="description" class="text-[var(--ui-text-dimmed)]">
      {{ description }}
    </p>
  </div>
</template>