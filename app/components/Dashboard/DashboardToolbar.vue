<script setup>

</script>

<template>
  <div
      class="min-h-12 flex-shrink-0 flex items-center border-b border-[var(--ui-border)] px-4 py-2 gap-x-4">
    <div class="flex items-center justify-between flex-1 gap-x-1.5">
      <div v-if="$slots.left" class="flex items-stretch gap-1.5">
        <slot name="left"/>
      </div>

      <div v-if="$slots.right" class="flex items-stretch gap-1.5">
        <slot name="right"/>
      </div>
    </div>
  </div>
</template>
