<script setup>
definePageMeta({
  title: 'title.reset_password',
  middleware: 'guest',
  layout: 'auth',
})

const route = useRoute()

const email = route.query.email
const resetToken = route.params.hash
</script>

<template>
  <AuthCard
      :title="$t('title.reset_password')"
      :description="$t('description.reset_password')"
      icon="i-lucide-lock-keyhole"
      backeable
  >
    <AuthResetPasswordForm
        :email="email"
        :token="resetToken"
    />
  </AuthCard>
</template>