<script setup>
const {locale, locales, setLocale} = useI18n()

const items = computed(() => locales.value
    .filter((i) => i.code !== locale.value)
    .map((locale) => ({
      label: locale.name,
      value: locale.code,
      onSelect: () => setLocale(locale.code),
    }))
)
</script>

<template>
  <div>
    <UDropdownMenu :items="items">
      <UButton variant="ghost" color="neutral" icon="i-lucide-languages"/>
    </UDropdownMenu>
  </div>
</template>