<script setup lang="ts">
definePageMeta({
  layout: 'auth',
  title: 'Reset password',
  pageIcon: 'i-lucide-lock-keyhole',
  pageTitle: 'Set new password',
  pageDescription: 'Your new password must be different to previously used passwords.',
})

const route = useRoute()

const resetToken = route.params.hash as string
</script>

<template>
  <AuthResetPasswordForm
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