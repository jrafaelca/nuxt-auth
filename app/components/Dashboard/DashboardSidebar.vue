<script setup>
defineProps({
  width: {
    type: String,
    default: '274px',
  },
  collapsedWidth: {
    type: String,
    default: '74px',
  },
  collapsed: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['update:collapse'])

const appConfig = useAppConfig();
const localeRoute = useLocaleRoute();
const {t} = useI18n()

const mapNavigationItems = (items) =>
    items.map((item) => ({
      ...item,
      label: t(item.label),
      to: item.route ? localeRoute(item.route) : undefined,
      children: item.children ? mapNavigationItems(item.children) : undefined,
    }));

const mainNavigationItems = computed(() => mapNavigationItems(appConfig.mainNavigationItems));
const secondaryNavigationItems = computed(() => mapNavigationItems(appConfig.secondaryNavigationItems));
</script>

<template>
  <div
      class="h-full flex flex-col transition-all duration-300"
      :style="{ width: collapsed ? collapsedWidth : width }"
  >
    <div class="h-16 w-full flex items-center justify-between px-6">
      <div class="flex items-center justify-center h-16 text-[var(--ui-primary)]">
        <NuxtLink
            v-if="!collapsed" :to="$localeRoute('index')"
            class="flex items-center justify-center "
        >
          <Logo class="h-6"/>
        </NuxtLink>

        <LogoMini
            v-else
            class="h-6"
            @click="$emit('update:collapsed', !collapsed)"
        />
      </div>

      <UButton
          v-if="!collapsed"
          color="neutral"
          variant="link"
          icon="i-lucide-square-chevron-left"
          @click="$emit('update:collapsed', !collapsed)"
      />
    </div>

    <div
        class="relative w-full grow flex flex-col py-6"
        :class="{
          'px-4': collapsed,
          'px-6 overflow-y-auto': !collapsed
        }"
    >
      <UNavigationMenu
          orientation="vertical"
          :items="mainNavigationItems"
          :collapsed="collapsed"
      />

      <div class="mb-2 grow"/>

      <UNavigationMenu
          v-if="secondaryNavigationItems.length > 0"
          orientation="vertical"
          :items="secondaryNavigationItems"
          :collapsed="collapsed"
      />
    </div>

    <div
        v-if="$slots.footer"
        class="h-16 w-full flex items-center gap-4 transition-all duration-150"
        :class="{
          'px-2 justify-center': collapsed ,
          'px-6': !collapsed
          }"
    >
      <slot name="footer"/>
    </div>
  </div>
</template>