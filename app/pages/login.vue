<script setup>
definePageMeta({
  title: 'Sign in',
  middleware: 'guest',
  layout: 'auth',
})
</script>

<template>
  <AuthCard
      :title="$t('Log in to your account')"
      :description="$t('Welcome back! Please enter your details.')"
      icon="file-icons-laravel"
  >
    <AuthLoginForm/>

    <div class="text-sm text-center text-[var(--ui-text-muted)]">
      {{ $t('Don’t have an account?') }}

      <UButton
          :to="$localeRoute({name: 'register'})"
          :label="$t('Sign up')"
          variant="link"
          class="p-0"
      />
    </div>
  </AuthCard>
</template>