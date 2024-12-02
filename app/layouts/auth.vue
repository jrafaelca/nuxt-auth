<script setup>

</script>

<template>
  <div id="layout" class="min-h-screen">
    <header>
      <UContainer>
        <div class="flex items-center justify-between h-16">
          <NuxtLink :to="$localeRoute({ name: 'login'})">
            <Logo class="h-8 text-[var(--ui-primary)]"/>
          </NuxtLink>

          <div class="flex gap-2">
            <LocaleDropdown/>
            <ColorModeDropdown/>
          </div>
        </div>
      </UContainer>
    </header>

    <main class="mt-12 md:mt-24">
      <UContainer>
        <div class="w-full mx-auto max-w-sm">
          <slot/>
        </div>
      </UContainer>
    </main>
  </div>
</template>


<style scoped>
#layout {
  background-image: url('@/assets/img/patterns/grid.png');
  background-repeat: no-repeat;
  background-position: center -100px;
  background-size: 768px;
}

.dark #layout {
  background-image: url('@/assets/img/patterns/grid-dark.png');
}
</style>