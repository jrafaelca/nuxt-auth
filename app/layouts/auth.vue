<script setup>

</script>

<template>
  <div id="layout" class="min-h-screen">
    <main class="pt-12 md:pt-24">
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
  background-image: url('~/assets/img/patterns/grid.png');
  background-repeat: no-repeat;
  background-position: center -100px;
  background-size: 768px;
}

.dark #layout {
  background-image: url('~/assets/img/patterns/grid-dark.png');
}
</style>