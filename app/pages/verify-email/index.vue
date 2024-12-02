<script setup>
definePageMeta({
  title: 'Sign in',
  middleware: 'auth',
  layout: 'auth',
})

</script>

<template>
  <div class="space-y-8">
    <div class="text-center space-y-6">
      <UButton
          :to="$localeRoute({name: 'login'})"
          variant="outline"
          color="neutral"
          size="xl"
          icon="i-lucide-mail"
          class="p-4"
      />

      <div class="space-y-3">
        <h1 class="font-semibold text-2xl md:text-3xl">
          {{ $t('Check your email') }}
        </h1>
        <p class="text-[var(--ui-text-muted)]">
          {{ $t('We send a verification link to the email address you provided.') }}
        </p>
      </div>
    </div>

    <EmailResendVerifyNotificationButton/>

    <div class="text-center">
      <UButton
          :to="$localeRoute({name: 'login'})"
          :label="$t('Back to log in')"
          variant="link"
          color="neutral"
          icon="i-lucide-arrow-left"
      />
    </div>
  </div>
</template>