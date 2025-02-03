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
      title: t('title.request_email_verify'),
      description: t('description.request_email_verify'),
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
      :label="$t('action.send_email_verify')"
      block
      @click="resendVerifyNotification"
  />
</template>
