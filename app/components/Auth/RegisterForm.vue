<script setup lang="ts">
import type {FormSubmitEvent} from '#ui/types'

const form = useTemplateRef('form')
const state = reactive({
  name: undefined,
  email: undefined,
  password: undefined,
})

const showPassword = ref(false)

function onSubmit(event: FormSubmitEvent<typeof state>) {
  form.value?.clear()

  const formData = event.data

  console.log(formData)
}
</script>

<template>
  <UForm
      ref="form"
      :state="state"
      class="space-y-5"
      @submit="onSubmit"
  >
    <UFormField
        name="name"
        :label="$t('Name')"
    >
      <UInput
          id="name"
          name="name"
          type="name"
          v-model="state.name"
          :placeholder="$t('Enter your name')"
          class="w-full"
          autofocus
          autocomplete="name"
      />
    </UFormField>

    <UFormField
        name="email"
        :label="$t('Email')"
    >
      <UInput
          id="email"
          name="email"
          type="email"
          v-model="state.email"
          :placeholder="$t('Enter your email')"
          class="w-full"
          autocomplete="username"
      />
    </UFormField>

    <UFormField
        name="password"
        :label="$t('Password')"
        :help="$t('Must be at least 8 characters.')"

    >
      <UInput
          id="password"
          name="password"
          :type="showPassword ? 'text' : 'password'"
          v-model="state.password"
          :placeholder="$t('Create a password')"
          class="w-full"
          autocomplete="new-password"
          :ui="{ trailing: 'pr-0.5' }"
      >
        <template #trailing>
          <UButton
              color="neutral"
              variant="link"
              size="sm"
              :icon="showPassword ? 'i-lucide-eye' : 'i-lucide-eye-closed'"
              :aria-label="showPassword ? $t('Hide password') : $t('Show password')"
              :aria-pressed="showPassword"
              aria-controls="password"
              @click="showPassword = !showPassword"
          />
        </template>
      </UInput>
    </UFormField>

    <UButton
        type="submit"
        :label="$t('Get started')"
        size="lg"
        class="mt-1"
        block
    />
  </UForm>
</template>