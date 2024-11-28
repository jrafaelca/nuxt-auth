<script setup>
const route = useRoute()
const config = useRuntimeConfig()
const {t} = useI18n()

useHead({
  title: () => t(route.meta?.title) ?? '',
  titleTemplate: () => {
    return t(route.meta?.title)
        ? `%s | ${config.public.appName}`
        : config.public.appName
  },
  htmlAttrs: {
    lang: config.public.appLocale,
  },
  meta: [
    {charset: 'utf-8'},
    {name: 'viewport', content: 'width=device-width, initial-scale=1'},
  ],
})
</script>

<template>
  <UApp>
    <NuxtLayout>
      <NuxtPage/>
    </NuxtLayout>
  </UApp>
</template>

<style>
@import "tailwindcss";
@import "@nuxt/ui";

@theme {
  --font-family-sans: 'Inter', sans-serif;
}
</style>
