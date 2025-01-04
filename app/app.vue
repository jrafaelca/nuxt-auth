<script setup>
import * as locales from '@nuxt/ui/locale'

const route = useRoute()
const config = useRuntimeConfig()
const {locale, t} = useI18n()

const lang = computed(() => locales[locale.value].code)
const dir = computed(() => locales[locale.value].dir)

useHead({
  title: () => route.meta?.title ? t(route.meta.title) : '',
  titleTemplate: () => route.meta?.title
      ? `%s | ${config.public.appName}`
      : config.public.appName,
  htmlAttrs: {
    lang,
    dir
  },
  meta: [
    {charset: 'utf-8'},
  ],
})
</script>

<template>
  <UApp :locale="locales[locale]">
    <NuxtLayout>
      <NuxtPage/>
    </NuxtLayout>
  </UApp>
</template>
