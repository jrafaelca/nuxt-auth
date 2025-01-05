<script setup>
const router = useRouter()

const open = ref(false);

watch(() => router.currentRoute.value, () => open.value = false);
</script>

<template>
  <UDrawer v-model:open="open" direction="left" :handle="false">
    <UButton
        variant="ghost"
        color="neutral"
        icon="i-lucide-menu"
        class="lg:hidden"
    />

    <template #content>
      <div class="w-64 flex flex-col">
        <header class="h-16 flex items-center px-6">
          <NuxtLink :to="$localeRoute({name: 'index'})">
            <Logo class="h-8 text-[var(--ui-primary)]"/>
          </NuxtLink>
        </header>

        <nav class="flex-1 overflow-y-auto px-4 py-2">
          <NavigationMenu/>
        </nav>

        <footer class="relative flex items-center justify-between px-1.5 py-2">
          <UserDropdown/>
        </footer>
      </div>
    </template>
  </UDrawer>
</template>