const httpClient = () => {
    const config = useRuntimeConfig()
    const csrfToken = useCookie('XSRF-TOKEN');

    return $fetch.create({
        baseURL: config.public.apiBaseUrl,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'X-Requested-With': 'XMLHttpRequest',
        },
        credentials: 'include',
        async onRequest({request, options, error}) {
            if (options.method !== 'GET') {
                await $fetch(config.public.apiBaseUrl + '/sanctum/csrf-cookie', {
                    credentials: 'include',
                });
            }

            if (csrfToken.value) {
                options.headers.set('X-XSRF-TOKEN', csrfToken.value)
            }
        },
    })
}

export default defineNuxtPlugin(async (nuxtApp) => {
    const client = httpClient()

    return {
        provide: {
            laravelClient: client,
        }
    }
})