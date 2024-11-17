<script setup lang="ts">
import type {FormSubmitEvent} from '#ui/types'

const form = useTemplateRef('form')
const state = reactive({
  email: undefined,
  password: undefined,
  remember: false,
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
          autofocus
          autocomplete="username"
      />
    </UFormField>

    <UFormField
        name="password"
        :label="$t('Password')"
    >
      <UInput
          id="password"
          name="password"
          :type="showPassword ? 'text' : 'password'"
          v-model="state.password"
          :placeholder="$t('Enter your password')"
          class="w-full"
          autocomplete="current-password"
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

    <div class="flex items-center justify-between pt-1">
      <UCheckbox
          :label="$t('Remember me')"
          name="remember"
          v-model="state.remember"
      />

      <UButton
          to="/forgot-password"
          :label="$t('Forgot password')"
          variant="link"
          class="p-0"
      />
    </div>

    <UButton
        type="submit"
        :label="$t('Sign in')"
        size="lg"
        class="mt-1"
        block
    />
  </UForm>
</template>