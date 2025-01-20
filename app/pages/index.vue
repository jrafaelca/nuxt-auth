<script setup>
definePageMeta({
  title: 'dashboard.page_title.main',
  middleware: ['auth', 'verified'],
})
</script>

<template>
  <div>
    {{ $t('dashboard.title.main') }}
  </div>
</template>