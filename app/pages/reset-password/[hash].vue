<script setup>
definePageMeta({
  title: 'Reset password',
  middleware: 'guest',
  layout: 'auth',
})

const route = useRoute()

const email = route.query.email
const resetToken = route.params.hash
</script>

<template>
  <AuthCard
      :title="$t('Set new password')"
      :description="$t('Your new password must be different to previously used passwords.')"
      icon="i-lucide-lock-keyhole"
      backeable
  >
    <AuthResetPasswordForm
        :email="email"
        :token="resetToken"
    />
  </AuthCard>
</template>