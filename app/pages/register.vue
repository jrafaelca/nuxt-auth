<script setup>
definePageMeta({
  middleware: 'guest',
  layout: 'auth',
  title: 'Sign up',
  pageIcon: 'file-icons-laravel',
  pageTitle: 'Create an account',
  pageDescription: 'Sign up in less than 2 minutes.',
})
</script>

<template>
  <AuthRegisterForm/>

  <div class="text-sm text-neutral-500 text-center">
    {{ $t('Already have an account?') }}
    <UButton
        to="/login"
        :label="$t('Log in')"
        variant="link"
        class="p-0"
    />
  </div>
</template>