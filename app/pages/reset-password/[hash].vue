<script setup>
definePageMeta({
  title: 'Reset password',
  middleware: 'guest',
  layout: 'auth',
})

const route = useRoute()

const email = route.query.email
const resetToken = route.params.hash
</script>

<template>
  <div class="space-y-8">
    <div class="text-center space-y-6">
      <UButton
          :to="$localeRoute({name: 'login'})"
          variant="outline"
          color="neutral"
          size="xl"
          icon="i-lucide-lock-keyhole"
          class="p-4"
      />

      <div class="space-y-3">
        <h1 class="font-semibold text-2xl md:text-3xl">
          {{ $t('Set new password') }}
        </h1>
        <p class="text-[var(--ui-text-muted)]">
          {{ $t('Your new password must be different to previously used passwords.') }}
        </p>
      </div>
    </div>

    <AuthResetPasswordForm
        :email="email"
        :token="resetToken"
    />

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