<script setup>
definePageMeta({
  title: 'auth.page_title.login',
  middleware: 'guest',
  layout: 'auth',
})

const appConfig = useAppConfig()
</script>

<template>
  <AuthCard
      :title="$t('auth.title.login')"
      :description="$t('auth.description.login')"
  >
    <AuthLoginForm/>

    <div v-if="appConfig.auth.register" class="text-center">
      <p class="text-sm text-[var(--ui-text-dimmed)]">
        {{ $t('auth.text.unregistered') }}

        <UButton
            :to="$localeRoute({name: 'register'})"
            :label="$t('auth.action.register')"
            variant="link"
            class="p-0"
        />
      </p>
    </div>
  </AuthCard>
</template>