<script setup>
definePageMeta({
  middleware: 'guest',
  layout: 'auth',
  title: 'Recover password',
  pageIcon: 'i-lucide-key-round',
  pageTitle: 'Forgot password?',
  pageDescription: 'No worries, we’ll send you reset instructions.',
})
</script>

<template>
  <AuthForgotPasswordForm/>

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