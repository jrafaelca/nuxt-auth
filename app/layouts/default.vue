<script setup>
const appConfig = useAppConfig()
const localeRoute = useLocaleRoute()
const router = useRouter()
const route = useRoute()
const {t} = useI18n()

const drawerOpen = ref(false);

const navigationItems = computed(() => appConfig.navigationItems.map((item) => ({
  label: t(item.label),
  icon: item.icon,
  to: localeRoute(item.route),
})))

watch(() => router.currentRoute.value, () => drawerOpen.value = false);
</script>

<template>
  <div class="bg-neutral-100 dark:bg-neutral-900 pb-20">
    <div
        class="fixed start-0 top-0 w-[280px] flex flex-col h-full bg-white dark:bg-neutral-800 border-r border-neutral-200 dark:border-neutral-700 z-[60] transition-all duration-300 -translate-x-full lg:translate-x-0">
      <div class="h-16 w-full flex items-center justify-between px-6">
        <div class="flex items-center justify-center">
          <NuxtLink :to="$localeRoute({name: 'index'})" class="flex items-center justify-center">
            <Logo class="shrink-0 text-[var(--ui-primary)] h-8"/>
          </NuxtLink>
        </div>
      </div>

      <div class="relative grow flex w-full flex-col py-6 px-6 overflow-y-auto">
        <UNavigationMenu orientation="vertical" :items="navigationItems"/>
      </div>

      <div class="h-16 flex w-full items-center gap-4 px-6 transition-all duration-150">
        <UserDropdown/>
      </div>
    </div>

    <div
        class="relative min-h-screen lg:max-w-[calc(100%_-_280px)] w-full px-4 xl:px-10 lg:ms-[280px] bg-neutral-100 dark:bg-neutral-900 overflow-x-hidden transition-all duration-300">
      <div class="mx-auto w-full max-w-7xl">
        <div class="relative mb-5 h-16 flex items-center gap-2">
          <UDrawer v-model:open="drawerOpen" direction="left" :handle="false">
            <UButton
                variant="ghost"
                color="neutral"
                icon="i-lucide-menu"
                class="lg:hidden"
            />

            <template #content>
              <div
                  class="w-[280px] flex flex-col h-full ">
                <div class="h-16 w-full flex items-center justify-between px-6">
                  <div class="flex items-center justify-center">
                    <NuxtLink :to="$localeRoute({name: 'index'})" class="flex items-center justify-center">
                      <Logo class="shrink-0 text-[var(--ui-primary)] h-8"/>
                    </NuxtLink>
                  </div>
                </div>

                <div class="relative grow flex w-full flex-col py-6 px-6 overflow-y-auto">
                  <UNavigationMenu orientation="vertical" :items="navigationItems"/>
                </div>

                <div class="h-16 flex w-full items-center gap-4 px-6 transition-all duration-150">
                  <UserDropdown/>
                </div>
              </div>
            </template>
          </UDrawer>

          <h1 v-if="route.meta?.title" class="nui-heading text-2xl font-light leading-6 text-neutral-800 hidden md:block dark:text-white">
            {{ $t(route.meta?.title) }}
          </h1>

          <div class="ms-auto"></div>

          <div class="flex items-center gap-2 h-16">
            <LocaleDropdown v-if="appConfig.localSwitch"/>
            <ColorModeButton v-if="appConfig.colorSwitch"/>
          </div>
        </div>

        <main>
          <slot/>
        </main>
      </div>
    </div>
  </div>
</template>