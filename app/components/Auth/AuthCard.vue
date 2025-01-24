<script setup>
defineProps({
  title: {
    type: String,
    default: ''
  },
  description: {
    type: String,
    default: ''
  },
  icon: {
    type: String,
    default: ''
  },
  backeable: {
    type: Boolean,
    default: false
  }
})

const appConfig = useAppConfig();

</script>

<template>
  <div class="space-y-8">
    <div v-if="title || description || icon || $slots.icon" class="text-center space-y-6">
      <UButton
          v-if="icon"
          :to="$localeRoute({name: 'login'})"
          variant="outline"
          color="neutral"
          :icon="icon"
          size="xl"
          class="p-4"
      />

      <NuxtLink v-else :to="$localeRoute({name: 'login'})" class="block">
        <Logo class="h-8 text-[var(--ui-primary)] mx-auto"/>
      </NuxtLink>

      <div v-if="title || description" class="space-y-3">
        <h1 v-if="title" class="font-semibold text-2xl text-[var(--ui-text-highlighted)] md:text-3xl">
          {{ title }}
        </h1>

        <p v-if="description" class="text-[var(--ui-text-muted)]">
          {{ description }}
        </p>
      </div>
    </div>

    <slot/>

    <div v-if="backeable" class="text-center">
      <UButton
          :to="$localeRoute({name: 'login'})"
          :label="$t('auth.action.back_login')"
          variant="link"
          color="neutral"
          icon="i-lucide-arrow-left"
      />
    </div>

    <div v-if="appConfig.localSwitch || appConfig.colorSwitch" class="flex items-center justify-center gap-2">
      <LocaleDropdown v-if="appConfig.localSwitch"/>
      <ColorModeButton v-if="appConfig.colorSwitch"/>
    </div>
  </div>
</template>
