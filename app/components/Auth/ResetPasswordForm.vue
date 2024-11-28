<script setup>
const props = defineProps({
  token: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
})

const {$laravelClient} = useNuxtApp()
const {mapFormErrors} = useLaravel()
const {t} = useI18n()
const toast = useToast()

const form = useTemplateRef('form')
const state = reactive({
  email: props.email,
  password: undefined,
  password_confirmation: undefined,
  token: props.token,
})

const showPassword = ref(false)

async function onSubmit(event) {
  form.value?.clear()

  const formData = event.data

  try {
    await $laravelClient('/v1/auth/reset-password', {
      method: 'POST',
      body: formData,
    })

    toast.add({
      title: t('Password updated'),
      description: t('Your password has been successfully changed. You can now log in with your new password.'),
      color: 'success',
      icon: 'lucide-circle-check'
    });

    navigateTo('/login', {replace: true})
  } catch (error) {
    if (error?.response.status === 422) {
      form.value?.setErrors(mapFormErrors(error.response._data.errors))
    }

    state.password = undefined
  }
}
</script>

<template>
  <UForm ref="form" :state="state" class="space-y-5" @submit="onSubmit">
    <UFormField name="email" :label="$t('Email')">
      <UInput
          type="email"
          v-model="state.email"
          :placeholder="$t('Enter your email')"
          class="w-full"
          autocomplete="username"
          readonly
      />
    </UFormField>

    <UFormField name="password" :label="$t('Password')">
      <UInput
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

    <UFormField name="password_confirmation" :label="$t('Confirm password')">
      <UInput
          :type="showPassword ? 'text' : 'password'"
          v-model="state.password_confirmation"
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