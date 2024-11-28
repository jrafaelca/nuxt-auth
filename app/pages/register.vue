<script setup>
definePageMeta({
  title: 'Sign up',
  middleware: 'guest',
  layout: 'auth',
})
</script>

<template>
  <AuthCard
      :title="$t('Create an account')"
      :description="$t('Sign up in less than 2 minutes.')"
      icon="file-icons-laravel"
  >
    <AuthRegisterForm/>

    <div class="text-sm text-center text-[var(--ui-text-muted)]">
      {{ $t('Already have an account?') }}

      <UButton
          :to="$localeRoute({name: 'login'})"
          :label="$t('Log in')"
          variant="link"
          class="p-0"
      />
    </div>
  </AuthCard>
</template>