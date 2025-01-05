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
      title: t('Verification email resent'),
      description: t('Please check your inbox for the verification email and follow the instructions to verify your account.'),
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
      :label="$t('Resend Verification Email')"
      size="lg"
      block
      @click="resendVerifyNotification"
  />
</template>

