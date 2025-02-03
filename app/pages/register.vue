<script setup>
definePageMeta({
  title: 'title.register',
  middleware: 'guest',
  layout: 'auth',
})
</script>

<template>
  <AuthCard
      :title="$t('title.register')"
      :description="$t('description.register')"
  >
    <AuthRegisterForm/>

    <div class="text-center">
      <p class="text-sm text-[var(--ui-text-dimmed)]">
        {{ $t('label.registered') }}

        <UButton
            :to="$localeRoute({name: 'login'})"
            :label="$t('action.login')"
            variant="link"
            class="p-0"
        />
      </p>
    </div>
  </AuthCard>
</template>