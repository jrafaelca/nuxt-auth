<script setup>
definePageMeta({
  middleware: [
    async (to) => {
      const {$laravelClient} = useNuxtApp()

      const id = to.params.id
      const hash = to.params.hash
      const expires = to.query.expires
      const signature = to.query.signature

      try {
        await $laravelClient(`/v1/auth/email/verify/${id}/${hash}?expires=${expires}&signature=${signature}`, {
          method: 'GET',
        })

        console.log('todo ok?')

        navigateTo('/', {replace: true})
      } catch (error) {
        console.log(error)
        throw error
      }
    }
  ],
})
</script>

<template>
</template>