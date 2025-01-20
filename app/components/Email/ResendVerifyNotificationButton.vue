<script setup>
const {$laravelClient} = useNuxtApp()
const {t} = useI18n()
const toast = useToast()

async function resendVerifyNotification() {
  try {
    await $laravelClient('/email/verification-notification', {
      method: 'POST',
    })

    toast.add({
      title: t('auth.notification.request_email_verify.title'),
      description: t('auth.notification.request_email_verify.description'),
      color: 'info',
      icon: 'i-lucide-mail'
    });
  } catch (error) {
    //
  }
}
</script>

<template>
  <UButton
      :label="$t('auth.action.send_email_verify')"
      block
      @click="resendVerifyNotification"
  />
</template>
