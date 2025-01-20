<script setup>
const appConfig = useAppConfig();

const {login} = useAuth()
const {mapFormErrors} = useLaravel()

const form = useTemplateRef('form')
const state = reactive({
  email: undefined,
  password: undefined,
  remember: false,
})

const showPassword = ref(false)

async function onSubmit(event) {
  form.value?.clear()

  const formData = event.data

  try {
    await login(formData)
  } catch (error) {
    if (error?.response.status === 422) {
      form.value?.setErrors(mapFormErrors(error.response._data.errors))
    }

    state.password = undefined
  }
}
</script>

<template>
  <UForm
      ref="form"
      :state="state"
      class="space-y-6"
      @submit="onSubmit"
  >
    <div class="space-y-5">
      <UFormField name="email" :label="$t('auth.label.email')">
        <UInput
            type="email"
            v-model="state.email"
            :placeholder="$t('auth.placeholder.email')"
            class="w-full"
            autofocus
            autocomplete="username"
        />
      </UFormField>

      <UFormField name="password" :label="$t('auth.label.password')">
        <UInput
            :type="showPassword ? 'text' : 'password'"
            v-model="state.password"
            :placeholder="$t('auth.placeholder.password')"
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
                :aria-label="$t(showPassword ? 'auth.text.hide_password' : 'auth.text.show_password')"
                :aria-pressed="showPassword"
                aria-controls="password"
                @click="showPassword = !showPassword"
            />
          </template>
        </UInput>
      </UFormField>
    </div>

    <div class="flex items-center justify-between">
      <UCheckbox :label="$t('auth.label.remember')" name="remember" v-model="state.remember"/>

      <UButton
          v-if="appConfig.auth.forgotPassword"
          :to="$localeRoute({name: 'forgot-password'})"
          :label="$t('auth.action.forgot_password')"
          variant="link"
          class="p-0"
      />
    </div>

    <UButton
        type="submit"
        :label="$t('auth.action.login')"
        size="lg"
        block
    />
  </UForm>
</template>