<script setup>
const appConfig = useAppConfig();
const router = useRouter();
const route = useRoute();

const {user} = useAuth()

const isCollapsed = ref(false);
const isDrawerOpen = ref(false);

watch(() => router.currentRoute.value, () => {
  isDrawerOpen.value = false;
});
</script>

<template>
  <div class="pb-20">
    <UDrawer v-model:open="isDrawerOpen" direction="left" :handle="false">
      <template #body>
        <DashboardSidebar width="256px"/>
      </template>
    </UDrawer>

    <DashboardSidebar
        v-model:collapsed="isCollapsed"
        class="fixed start-0 top-0 border-r border-[var(--ui-border)] z-[60] -translate-x-full lg:translate-x-0"
    >
      <template #footer>
        <UserDropdown variant="ghost" :ui="{base: 'w-full'}">
          <div v-if="!isCollapsed" class="whitespace-nowrap">
            {{ user?.name }}
          </div>
        </UserDropdown>
      </template>
    </DashboardSidebar>

    <div
        class="relative min-h-screen w-full overflow-x-hidden transition-all duration-300"
        :class="[
            {'lg:max-w-[calc(100%_-_280px)] lg:ms-[280px]': !isCollapsed },
            {'lg:max-w-[calc(100%_-_65px)] lg:ms-[65px]': isCollapsed },
        ]"
    >
      <UContainer>
        <div class="relative h-16 mb-5 flex items-center gap-2">
          <UButton
              color="neutral"
              variant="ghost"
              icon="i-lucide-menu"
              class="md:hidden"
              @click="isDrawerOpen = true"
          />

          <h1 v-if="route.meta?.title" class="text-2xl font-light text-[var(--ui-text-highlighted)] hidden md:block">
            {{ $t(route.meta?.title) }}
          </h1>

          <div class="ms-auto"/>

          <LocaleDropdown v-if="appConfig.localSwitch"/>
          <ColorModeButton v-if="appConfig.colorSwitch"/>
          <UserDropdown variant="link"
          />
        </div>

        <div>
          <slot/>
        </div>
      </UContainer>
    </div>
  </div>
</template>