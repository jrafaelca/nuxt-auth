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
  <ClientOnly>
    <UDropdownMenu :items="items">
      <UButton
          color="neutral"
          variant="ghost"
          icon="i-lucide-languages"
      />
    </UDropdownMenu>

    <template #fallback>
      <div class="size-8"/>
    </template>
  </ClientOnly>
</template>