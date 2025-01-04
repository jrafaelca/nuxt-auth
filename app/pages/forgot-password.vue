<script setup>
definePageMeta({
  title: 'Forgot password?',
  middleware: 'guest',
  layout: 'auth',
})
</script>

<template>
  <AuthCard
      :title="$t('Forgot password?')"
      :description="$t('No worries, we’ll send you reset instructions.')"
      icon="i-lucide-key-round"
      backeable
  >
    <AuthForgotPasswordForm/>
  </AuthCard>
</template>