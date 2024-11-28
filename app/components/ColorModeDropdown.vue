<script setup>
const colorMode = useColorMode()
const {t} = useI18n()

const items = computed(() => [{
  value: 'system',
  label: t('System'),
  icon: 'i-lucide-computer',
  onSelect: () => colorMode.preference = 'system'
}, {
  value: 'light',
  label: t('Light'),
  icon: 'i-lucide-sun',
  onSelect: () => colorMode.preference = 'light'
}, {
  value: 'dark',
  label: t('Dark'),
  icon: 'i-lucide-moon',
  onSelect: () => colorMode.preference = 'dark'
}])
</script>

<template>
  <div>
    <UDropdownMenu :items="items">
      <UButton variant="ghost" color="neutral" :icon="items.find((i)=> i.value === $colorMode.preference)?.icon"/>
    </UDropdownMenu>
  </div>
</template>