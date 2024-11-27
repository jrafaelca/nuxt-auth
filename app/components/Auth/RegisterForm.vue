<script setup>
const {$laravelClient} = useNuxtApp()
const {mapFormErrors} = useLaravel()

const form = useTemplateRef('form')
const state = reactive({
  name: undefined,
  email: undefined,
  password: undefined,
})

const showPassword = ref(false)

async function onSubmit(event) {
  form.value?.clear()

  const formData = event.data

  try {
    await $laravelClient('/v1/auth/register', {
      method: 'POST',
      body: formData,
    })

    navigateTo('/', {replace: true})
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