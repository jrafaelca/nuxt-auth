<script setup>
defineProps({
  title: {
    type: String,
    default: ''
  },
  description: {
    type: String,
    default: ''
  },
  icon: {
    type: String,
    default: ''
  },
})
</script>

<template>
  <div class="space-y-8">
    <div class="text-center space-y-6">

      <div
          v-if="icon || $slots.icon"
          class="inline-flex p-3.5 border border-2 bg-[var(--ui-bg)] border-[var(--ui-border)] rounded-[var(--ui-radius)]"
      >
        <UIcon v-if="icon" :name="icon" class="size-6"/>

        <slot name="icon"/>
      </div>

      <div v-if="title || description" class="space-y-3">
        <h1 v-if="title" class="font-semibold text-2xl md:text-3xl">
          {{ title }}
        </h1>

        <p v-if="description" class="text-[var(--ui-text-muted)]">
          {{ description }}
        </p>
      </div>
    </div>

    <slot/>
  </div>
</template>
