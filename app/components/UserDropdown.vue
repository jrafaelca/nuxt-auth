<script setup>
const {t} = useI18n()

const {user, logout} = useAuth()

const items = computed(() => [{
  label: t('Logout'),
  icon: 'i-lucide-log-out',
  onSelect: async () => logout()
}])

</script>

<template>
  <UDropdownMenu :items="items" :ui="{content: 'w-58'}">
    <UButton
        v-if="user"
        color="neutral"
        variant="ghost"
        icon="i-lucide-circle-user"
        trailing-icon="i-lucide-ellipsis-vertical"
        :ui="{base: 'w-full', trailingIcon: 'ml-auto'}"
    >
      <div class="whitespace-nowrap">
        {{ user.name }}
      </div>
    </UButton>
  </UDropdownMenu>
</template>