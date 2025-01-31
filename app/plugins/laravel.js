const httpClient = () => {
    const config = useRuntimeConfig()
    const csrfToken = useCookie('XSRF-TOKEN');

    return $fetch.create({
        baseURL: config.public.apiBaseUrl,
        headers: {
            'Accept': 'application/json',
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

            if (!(options.body instanceof FormData)) {
                options.headers.set('Content-Type', 'application/json');
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