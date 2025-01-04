<script setup>
definePageMeta({
  title: 'Dashboard',
  middleware: ['auth', 'verified'],
})
</script>

<template>
  <div class="flex-1 pt-8 pb-12 px-4 lg:px-8 overflow-y-auto">
    <PageHeader :title="$t('Dashboard')"/>
  </div>
</template>