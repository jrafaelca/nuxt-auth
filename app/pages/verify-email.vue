<script setup>
definePageMeta({
  title: 'title.email_verify',
  middleware: 'auth',
  layout: 'auth',
})

</script>

<template>
  <AuthCard
      :title="$t('title.email_verify')"
      :description="$t('description.email_verify')"
      icon="i-lucide-mail"
  >
    <EmailResendVerifyNotificationButton/>
  </AuthCard>
</template>