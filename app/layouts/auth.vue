<script setup lang="ts">
const route = useRoute()
</script>

<template>
  <div id="layout-wrapper" class="min-h-screen">
    <div class="w-full mx-auto pt-12 px-4 md:pt-24 md:px-0 md:max-w-[360px]">
      <div class="space-y-8">
        <div class="text-center space-y-6">
          <div class="inline-flex p-3.5 bg-white border border-2 border-neutral-200 rounded-lg">
            <UIcon
                v-if="route.meta.pageIcon"
                :name="`${route.meta.pageIcon}`"
                class="size-6"
            />
          </div>

          <div class="space-y-3">
            <h1 v-if="route.meta.pageTitle" class="font-semibold text-2xl md:text-3xl">
              {{ $t(`${route.meta.pageTitle}`) }}
            </h1>

            <p v-if="route.meta.pageDescription" class="text-neutral-600">
              {{ $t(`${route.meta.pageDescription}`) }}
            </p>
          </div>
        </div>

        <slot/>
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