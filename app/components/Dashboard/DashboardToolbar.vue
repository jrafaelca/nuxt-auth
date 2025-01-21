<script setup>

</script>

<template>
  <div class="mb-6">
    <div class="mb-4 flex w-full flex-col items-center justify-between gap-4 sm:flex-row">
      <div v-if="$slots.left" class="flex w-full items-center gap-4 sm:w-auto">
        <slot name="left"/>
      </div>

      <div v-if="$slots.right" class="flex w-full items-center justify-end gap-4 sm:w-auto">
        <slot name="right"/>
      </div>
    </div>
  </div>
</template>