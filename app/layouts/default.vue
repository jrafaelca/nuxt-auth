<script setup>
const appConfig = useAppConfig();
const localeRoute = useLocaleRoute();
const router = useRouter();
const {t} = useI18n();

const drawerOpen = ref(false);

// Helper function to translate and map navigation items
const mapNavigationItems = (items) =>
    items.map((item) => ({
      ...item,
      label: t(item.label),
      to: item.route ? localeRoute(item.route) : undefined,
      children: item.children ? mapNavigationItems(item.children) : undefined,
    }));

// Computed properties for navigation items
const mainNavigationItems = computed(() => mapNavigationItems(appConfig.mainNavigationItems));
const secondaryNavigationItems = computed(() => mapNavigationItems(appConfig.secondaryNavigationItems));

// Close drawer when route changes
watch(() => router.currentRoute.value, () => {
  drawerOpen.value = false;
});
</script>

<template>
  <DashboardLayout>
    <DashboardPanel class="lg:w-62">
      <div class="h-16 flex-shrink-0 flex items-center px-4 gap-x-4 min-w-0">
        <NuxtLink :to="$localeRoute('index')">
          <Logo class="h-6 text-[var(--ui-primary)]"/>
        </NuxtLink>
      </div>

      <DashboardSidebar>
        <UNavigationMenu orientation="vertical" :items="mainNavigationItems" class="relative !min-h-[auto] !min-w-[auto]"/>

        <USeparator/>

        <div class="flex-1"/>

        <UNavigationMenu orientation="vertical" :items="secondaryNavigationItems"/>

        <USeparator/>

        <template #footer>
          <UserDropdown/>
        </template>
      </DashboardSidebar>
    </DashboardPanel>

    <slot/>
  </DashboardLayout>
</template>