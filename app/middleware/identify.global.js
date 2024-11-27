export default defineNuxtRouteMiddleware(async (to) => {
    const {fetchUser} = useAuth()

    await fetchUser()
})