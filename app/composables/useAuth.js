export const useAuth = () => {
    const {$laravelClient} = useNuxtApp()

    const user = useState('user', () => null)
    const isAuthenticated = computed(() => user.value !== null)

    async function fetchUser() {
        try {
            const {data} = await $laravelClient('/v1/user')

            user.value = data
        } catch (error) {
            //
        }
    }

    async function login(credentials) {
        try {
            const response = await $laravelClient('/login', {
                method: 'POST',
                body: credentials,
            })

            navigateTo('/', {replace: true})

            return response
        } catch (error) {
            throw error
        }
    }

    async function logout() {
        try {
            await $laravelClient('/logout', {
                method: 'POST',
            })

            user.value = null

            navigateTo('/login', {replace: true})
        } catch (error) {
            throw error
        }
    }

    return {
        user,
        isAuthenticated,
        fetchUser,
        login,
        logout,
    }
}