<script setup>
definePageMeta({
  title: 'Sign in',
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
          class="p-4"
      >
        <Logo class="h-6"/>
      </UButton>

      <div class="space-y-3">
        <h1 class="font-semibold text-2xl md:text-3xl">
          {{ $t('Log in to your account') }}
        </h1>
        <p class="text-[var(--ui-text-muted)]">
          {{ $t('Welcome back! Please enter your details.') }}
        </p>
      </div>
    </div>

    <AuthLoginForm/>

    <div class="text-center">
      <p class="text-sm text-[var(--ui-text-muted)]">
        {{ $t('Don’t have an account?') }}
        <UButton
            :to="$localeRoute({name: 'register'})"
            :label="$t('Sign up')"
            variant="link"
            class="p-0"
        />
      </p>
    </div>
  </div>
</template>