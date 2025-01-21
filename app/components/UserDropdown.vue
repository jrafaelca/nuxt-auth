<script setup>
const {t} = useI18n()

const {user, logout} = useAuth()

const items = computed(() => [{
  label: t('auth.action.logout'),
  icon: 'i-lucide-log-out',
  onSelect: async () => logout()
}])

</script>

<template>
  <UDropdownMenu :items="items">
    <UButton
        color="neutral"
        :avatar="{alt: user.name, size: 'md'}"
        v-bind="$attrs"
    >
      <slot/>
    </UButton>
  </UDropdownMenu>
</template>