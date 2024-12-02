<script setup>
definePageMeta({
  title: 'Sign up',
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
          {{ $t('Create an account') }}
        </h1>
        <p class="text-[var(--ui-text-muted)]">
          {{ $t('Sign up in less than 2 minutes.') }}
        </p>
      </div>
    </div>

    <AuthRegisterForm/>

    <div class="text-center">
      <p class="text-sm text-[var(--ui-text-muted)]">
        {{ $t('Don’t have an account?') }}
        <UButton
            :to="$localeRoute({name: 'login'})"
            :label="$t('Log in')"
            variant="link"
            class="p-0"
        />
      </p>
    </div>
  </div>
</template>