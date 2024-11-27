export default defineNuxtRouteMiddleware((to) => {
    const {loggedIn} = useAuth()

    if (!loggedIn.value) {
        return
    }

    return navigateTo('/', {replace: true})
})