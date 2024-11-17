<script setup lang="ts">
definePageMeta({
  layout: 'auth',
  title: 'Sign in',
  pageIcon: 'i-lucide-mail',
  pageTitle: 'Check your email',
  pageDescription: 'We send a verification link to the email address you provided.',
})
</script>

<template>
  <UButton
      :label="$t('Resend Verification Email')"
      size="lg"
      block
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