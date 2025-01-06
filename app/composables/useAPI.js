export function useAPI(url, options = {},) {
    return useFetch(url, {
        ...options,
        $fetch: useNuxtApp().$laravelClient
    })
}