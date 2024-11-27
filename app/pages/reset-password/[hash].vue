<script setup>
definePageMeta({
  middleware: 'guest',
  layout: 'auth',
  title: 'Reset password',
  pageIcon: 'i-lucide-lock-keyhole',
  pageTitle: 'Set new password',
  pageDescription: 'Your new password must be different to previously used passwords.',
})

const route = useRoute()

const email = route.query.email
const resetToken = route.params.hash
</script>

<template>
  <AuthResetPasswordForm
      :email="email"
      :token="resetToken"
  />

  <div class="text-center">
    <UButton
        to="/login"
        :label="$t('Back to log in')"
        color="neutral"
        icon="i-lucide-arrow-left"
        variant="link"
        class="p-0"
    />
  </div>
</template>