<script setup lang="ts">
definePageMeta({
  layout: 'auth',
  title: 'Sign in',
  pageIcon: 'file-icons-laravel',
  pageTitle: 'Log in to your account',
  pageDescription: 'Welcome back! Please enter your details.',
})
</script>

<template>
  <AuthLoginForm/>

  <div class="text-sm text-neutral-500 text-center">
    {{ $t('Don’t have an account?') }}
    <UButton
        to="/register"
        :label="$t('Sign up')"
        variant="link"
        class="p-0"
    />
  </div>
</template>