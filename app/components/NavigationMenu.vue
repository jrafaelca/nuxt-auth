<script setup>
const appConfig = useAppConfig()
const localeRoute = useLocaleRoute()
const {t} = useI18n()

const navigationItems = computed(() => appConfig.navigationItems.map((item) => ({
  label: t(item.label),
  icon: item.icon,
  to: localeRoute(item.route),
})))
</script>

<template>
  <UNavigationMenu orientation="vertical" :items="navigationItems"/>
</template>
