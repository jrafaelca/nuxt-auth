<script setup>
defineProps({
  title: {
    type: String,
    default: ''
  },
  badge: {
    type: String,
    default: ''
  }
})
</script>

<template>
  <div
      class="h-16 flex-shrink-0 flex items-center border-b border-[var(--ui-border)] px-4 gap-x-4 min-w-0">
    <div class="flex items-center justify-between flex-1 gap-x-1.5 min-w-0">
      <div class="flex items-stretch gap-1.5 min-w-0">
        <UButton
            color="neutral"
            variant="ghost"
            icon="i-lucide-menu"
            class="lg:hidden"
            :aria-label="$t('dashboard.label.open_sidebar')"
        />
        <h1 v-if="title" class="flex items-center gap-1.5 font-semibold min-w-0">
          <span class="truncate">{{ title }}</span>
        </h1>

        <UBadge v-if="badge" :label="badge" variant="subtle"/>
      </div>

      <div v-if="$slots.right" class="flex items-stretch flex-shrink-0 gap-1.5">
        <slot name="right"/>
      </div>
    </div>
  </div>
</template>
