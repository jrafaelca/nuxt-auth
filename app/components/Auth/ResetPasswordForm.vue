<script setup lang="ts">
import type {FormSubmitEvent} from '#ui/types'

interface Props {
  token: string
}

const props = defineProps<Props>()

const form = useTemplateRef('form')
const state = reactive({
  password: undefined,
  password_confirmation: undefined,
  token: props.token,
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
          autocomplete="new-password"
          autofocus
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

    <UFormField
        name="password_confirmation"
        :label="$t('Confirm password')"
    >
      <UInput
          id="password_confirmation"
          name="password_confirmation"
          :type="showPassword ? 'text' : 'password'"
          v-model="state.password"
          :placeholder="$t('Enter again your password')"
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
        :label="$t('Reset password')"
        size="lg"
        class="mt-1"
        block
    />
  </UForm>
</template>