<script setup>
const appConfig = useAppConfig()
</script>

<template>
  <div class="fixed inset-0 flex overflow-hidden">
    <aside class="hidden lg:flex lg:w-64 flex-col border-r border-[var(--ui-border)]">
      <header class="h-16 flex items-center px-6">
        <NuxtLink :to="$localeRoute({name: 'index'})">
          <Logo class="h-8 text-[var(--ui-primary)]"/>
        </NuxtLink>
      </header>

      <nav class="flex-1 overflow-y-auto px-4 py-2">
        <NavigationMenu/>
      </nav>

      <footer class="flex items-center justify-between px-4 py-2">
        <UserDropdown/>
      </footer>
    </aside>

    <main class="flex-1 flex flex-col">
      <header class="h-16 flex items-center border-b border-[var(--ui-border)] px-4">
        <div class="flex-1 flex items-center gap-2">
          <NavigationDrawer/>
        </div>
        <div class="flex items-center gap-2">
          <LocaleDropdown v-if="appConfig.localSwitch"/>
          <ColorModeButton v-if="appConfig.colorSwitch"/>
        </div>
      </header>

      <section class="flex-1 overflow-auto">
        <slot/>
      </section>
    </main>
  </div>
</template>