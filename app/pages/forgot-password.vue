<script setup>
definePageMeta({
  title: 'auth.title.forgot_password',
  middleware: 'guest',
  layout: 'auth',
})
</script>

<template>
  <AuthCard
      :title="$t('auth.title.forgot_password')"
      :description="$t('auth.description.forgot_password')"
      icon="i-lucide-key-round"
      backeable
  >
    <AuthForgotPasswordForm/>
  </AuthCard>
</template>