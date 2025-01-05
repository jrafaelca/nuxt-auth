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
        variant="ghost"
        color="neutral"
        icon="i-lucide-circle-user"
        trailing-icon="i-lucide-ellipsis-vertical"
        class="w-full"
        :ui="{trailingIcon: 'ml-auto'}"
    >
      <div class="whitespace-nowrap">
        {{ user.name }}
      </div>
    </UButton>
  </UDropdownMenu>
</template>