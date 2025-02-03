<script setup>
definePageMeta({
  title: 'title.forgot_password',
  middleware: 'guest',
  layout: 'auth',
})
</script>

<template>
  <AuthCard
      :title="$t('title.forgot_password')"
      :description="$t('description.forgot_password')"
      icon="i-lucide-key-round"
      backeable
  >
    <AuthForgotPasswordForm/>
  </AuthCard>
</template>