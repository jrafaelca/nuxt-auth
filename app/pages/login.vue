<script setup>
definePageMeta({
  title: 'title.login',
  middleware: 'guest',
  layout: 'auth',
})

const appConfig = useAppConfig()
</script>

<template>
  <AuthCard
      :title="$t('title.login')"
      :description="$t('description.login')"
  >
    <AuthLoginForm/>

    <div v-if="appConfig.auth.register" class="text-center">
      <p class="text-sm text-[var(--ui-text-dimmed)]">
        {{ $t('label.unregistered') }}

        <UButton
            :to="$localeRoute({name: 'register'})"
            :label="$t('action.register')"
            variant="link"
            class="p-0"
        />
      </p>
    </div>
  </AuthCard>
</template>