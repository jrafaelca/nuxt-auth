<script setup>
const {$laravelClient} = useNuxtApp()
const {mapFormErrors} = useLaravel()
const {t} = useI18n()
const toast = useToast()

const form = useTemplateRef('form')
const state = reactive({
  email: undefined,
})

async function onSubmit(event) {
  form.value?.clear()

  const formData = event.data

  try {
    await $laravelClient('/forgot-password', {
      method: 'POST',
      body: formData,
    })

    toast.add({
      title: t('auth.notification.request_password.title'),
      description: t('auth.notification.request_password.description'),
      color: 'info',
      icon: 'i-lucide-info'
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
    </div>

    <UButton
        type="submit"
        :label="$t('auth.action.request_password')"
        size="lg"
        block
    />
  </UForm>
</template>