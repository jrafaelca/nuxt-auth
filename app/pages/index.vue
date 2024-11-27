<script setup>
definePageMeta({
  middleware: ['auth', 'verified'],
  title: 'Dashboard',
})

const {logout} = useAuth()
</script>

<template>
  <div>
    <UButton @click="logout">{{ $t('Logout') }}</UButton>
  </div>
</template>