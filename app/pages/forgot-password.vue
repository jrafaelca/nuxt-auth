<script setup>
definePageMeta({
  title: 'Forgot password',
  middleware: 'guest',
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
          icon="i-lucide-key-round"
          class="p-4"
      />

      <div class="space-y-3">
        <h1 class="mb-3 font-semibold text-2xl md:text-3xl">
          {{ $t('Forgot password?') }}
        </h1>

        <p class="text-[var(--ui-text-muted)]">
          {{ $t('No worries, we’ll send you reset instructions.') }}
        </p>
      </div>
    </div>

    <AuthForgotPasswordForm/>

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