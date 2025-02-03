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
    await $laravelClient('/register', {
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
      class="space-y-6"
      @submit="onSubmit"
  >
    <div class="space-y-5">
      <UFormField name="name" :label="$t('label.name')">
        <UInput
            type="name"
            v-model="state.name"
            :placeholder="$t('placeholder.name')"
            class="w-full"
            autofocus
            autocomplete="name"
        />
      </UFormField>

      <UFormField name="email" :label="$t('label.email')">
        <UInput
            type="email"
            v-model="state.email"
            :placeholder="$t('placeholder.email')"
            class="w-full"
            autocomplete="username"
        />
      </UFormField>

      <UFormField name="password" :label="$t('label.password')" :help="$t('help.password')">
        <UInput
            :type="showPassword ? 'text' : 'password'"
            v-model="state.password"
            :placeholder="$t('placeholder.password')"
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
        :label="$t('action.register')"
        size="lg"
        block
    />
  </UForm>
</template>