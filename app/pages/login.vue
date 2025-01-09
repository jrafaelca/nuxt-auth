<script setup>
definePageMeta({
  title: 'Sign in',
  middleware: 'guest',
  layout: 'auth',
})

const appConfig = useAppConfig()
</script>

<template>
  <AuthCard
      :title="$t('Log in to your account')"
      :description="$t('Welcome back! Please enter your details.')"
  >
    <AuthLoginForm/>

    <div v-if="appConfig.auth.register" class="text-center">
      <p class="text-sm text-[var(--ui-text-dimmed)]">
        {{ $t('Don’t have an account?') }}
        <UButton
            :to="$localeRoute({name: 'register'})"
            :label="$t('Sign up')"
            variant="link"
            class="p-0"
        />
      </p>
    </div>
  </AuthCard>
</template>