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
    await $laravelClient('/reset-password', {
      method: 'POST',
      body: formData,
    })

    toast.add({
      title: t('title.update_password'),
      description: t('description.update_password'),
      color: 'success',
      icon: 'i-lucide-circle-check'
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
  <UForm
      ref="form"
      :state="state"
      class="space-y-6"
      @submit="onSubmit"
  >
    <div class="space-y-5">
      <UFormField name="email" :label="$t('label.email')">
        <UInput
            type="email"
            v-model="state.email"
            :placeholder="$t('placeholder.email')"
            class="w-full"
            autocomplete="username"
            readonly
        />
      </UFormField>

      <UFormField name="password" :label="$t('label.password')">
        <UInput
            :type="showPassword ? 'text' : 'password'"
            v-model="state.password"
            :placeholder="$t('placeholder.password')"
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
                :aria-label="showPassword ? $t('label.hide_password') : $t('label.show_password')"
                :aria-pressed="showPassword"
                aria-controls="password"
                @click="showPassword = !showPassword"
            />
          </template>
        </UInput>
      </UFormField>

      <UFormField name="password_confirmation" :label="$t('label.password_confirmation')">
        <UInput
            :type="showPassword ? 'text' : 'password'"
            v-model="state.password_confirmation"
            :placeholder="$t('placeholder.password_confirmation')"
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
                :aria-label="showPassword ? $t('label.hide_password') : $t('label.show_password')"
                :aria-pressed="showPassword"
                aria-controls="password"
                @click="showPassword = !showPassword"
            />
          </template>
        </UInput>
      </UFormField>
    </div>

    <UButton
        type="submit"
        :label="$t('action.reset_password')"
        size="lg"
        block
    />
  </UForm>
</template>