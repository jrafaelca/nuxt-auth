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
  >
    <AuthRegisterForm/>

    <div class="text-center">
      <p class="text-sm text-[var(--ui-text-dimmed)]">
        {{ $t('Already have an account?') }}
        <UButton
            :to="$localeRoute({name: 'login'})"
            :label="$t('Log in')"
            variant="link"
            class="p-0"
        />
      </p>
    </div>
  </AuthCard>
</template>