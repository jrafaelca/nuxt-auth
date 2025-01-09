<script setup>
definePageMeta({
  title: 'Dashboard',
  middleware: ['auth', 'verified'],
})
</script>

<template>
  <div>
    {{ $t('Dashboard') }}
  </div>
</template>