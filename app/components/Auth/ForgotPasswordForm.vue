<script setup lang="ts">
import type {FormSubmitEvent} from '#ui/types'

const form = useTemplateRef('form')
const state = reactive({
  email: undefined,
})

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

    <UButton
        type="submit"
        :label="$t('Reset password')"
        size="lg"
        class="mt-1"
        block
    />
  </UForm>
</template>