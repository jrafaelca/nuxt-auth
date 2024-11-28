<script setup>
definePageMeta({
  title: 'Sign in',
  middleware: 'auth',
  layout: 'auth',
})

</script>

<template>
  <AuthCard
      :title="$t('Check your email')"
      :description="$t('We send a verification link to the email address you provided.')"
      icon="i-lucide-mail"
  >
    <EmailResendVerifyNotificationButton/>

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