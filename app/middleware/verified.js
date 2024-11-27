export default defineNuxtRouteMiddleware((to) => {
    const {user} = useAuth()

    if (user.value?.email_verified_at) {
        return
    }
    
    return navigateTo('/verify-email', {replace: true})
})