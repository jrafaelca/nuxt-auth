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
    await $laravelClient('/v1/auth/forgot-password', {
      method: 'POST',
      body: formData,
    })

    toast.add({
      title: t('Request sent'),
      description: t('Check your email to continue with the password recovery process.'),
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
      <UFormField name="email" :label="$t('Email')">
        <UInput
            type="email"
            v-model="state.email"
            :placeholder="$t('Enter your email')"
            class="w-full"
            autofocus
            autocomplete="username"
        />
      </UFormField>
    </div>

    <UButton
        type="submit"
        :label="$t('Reset password')"
        size="lg"
        block
    />
  </UForm>
</template>