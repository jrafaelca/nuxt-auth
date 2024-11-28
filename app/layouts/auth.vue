<script setup lang="ts">
const route = useRoute()
</script>

<template>
  <div id="layout-wrapper" class="min-h-screen">
    <div class="w-full mx-auto pt-12 px-4 md:pt-24 md:px-0 md:max-w-[360px]">
      <slot/>

      <div class="flex items-center justify-center mt-4">
        <LocaleDropdown/>
      </div>
    </div>
  </div>
</template>

<style scoped>
#layout-wrapper {
  background-image: url('@/assets/img/patterns/grid.png');
  background-repeat: no-repeat;
  background-position: center -100px;
  background-size: 768px;
}
</style>