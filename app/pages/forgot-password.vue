<script setup>
definePageMeta({
  title: 'Forgot password',
  middleware: 'guest',
  layout: 'auth',
})
</script>

<template>
  <AuthCard
      :title="$t('Forgot password?')"
      :description="$t('No worries, we’ll send you reset instructions.')"
      icon="i-lucide-key-round"
  >
    <AuthForgotPasswordForm/>

    <div class="text-center">
      <UButton
          :to="$localeRoute({name: 'login'})"
          :label="$t('Back to log in')"
          variant="link"
          color="neutral"
          icon="i-lucide-arrow-left"
          class="p-0"
      />
    </div>
  </AuthCard>
</template>