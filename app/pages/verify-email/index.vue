<script setup>
definePageMeta({
  title: 'Email verification',
  middleware: 'auth',
  layout: 'auth',
})

</script>

<template>
  <AuthCard
      :title="$t('Check your email')"
      :description="$t('We send a verification link to the email address you provided.')"
      icon="i-lucide-mail"
      backeable
  >
    <EmailResendVerifyNotificationButton/>
  </AuthCard>
</template>