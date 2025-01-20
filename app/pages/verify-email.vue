<script setup>
definePageMeta({
  title: 'auth.page_title.email_verify',
  middleware: 'auth',
  layout: 'auth',
})

</script>

<template>
  <AuthCard
      :title="$t('auth.title.email_verify')"
      :description="$t('auth.description.email_verify')"
      icon="i-lucide-mail"
  >
    <EmailResendVerifyNotificationButton/>
  </AuthCard>
</template>