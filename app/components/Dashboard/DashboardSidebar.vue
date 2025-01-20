<script setup>

</script>

<template>
  <div class="flex flex-col w-full flex-1 relative overflow-hidden">
    <div class="flex-1 flex-grow flex flex-col min-h-0 gap-y-2 py-2">
      <div class="flex-1 px-4 flex flex-col gap-y-2 overflow-y-auto">
        <slot/>
      </div>

      <div class="flex items-center justify-between gap-x-1.5 flex-shrink-0 px-4">
        <slot name="footer"/>
      </div>
    </div>
  </div>
</template>
