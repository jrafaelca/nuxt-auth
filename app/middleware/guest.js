export default defineNuxtRouteMiddleware((to) => {
    const {isAuthenticated} = useAuth()

    if (!isAuthenticated.value) {
        return
    }

    return navigateTo('/', {replace: true})
})