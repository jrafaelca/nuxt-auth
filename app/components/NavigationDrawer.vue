<script setup>
const router = useRouter()

const open = ref(false);

watch(() => router.currentRoute.value, () => open.value = false);
</script>

<template>
  <UDrawer v-model:open="open" title="Drawer with title" direction="left">
    <UButton
        variant="ghost"
        color="neutral"
        icon="i-lucide-menu"
        class="lg:hidden"
    />

    <template #content>
      <div class="w-64">
        <div class="h-16 p-6">
          <Logo class="h-8 text-[var(--ui-primary)]"/>
        </div>

        <div class="p-4">
          <NavigationMenu/>
        </div>
      </div>
    </template>
  </UDrawer>
</template>