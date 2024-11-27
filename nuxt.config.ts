export default defineNuxtConfig({
    ssr: false,
    runtimeConfig: {
        public: {
            appName: process.env.APP_NAME || 'NuxtLaravel',
            appUrl: process.env.APP_URL || 'http://localhost:3000',
            appLocale: process.env.APP_LOCALE || 'en',
            apiBaseUrl: process.env.API_BASE_URL || 'http://localhost',
        },
    },
    compatibilityDate: '2024-04-03',
    devtools: {enabled: true},
    future: {
        compatibilityVersion: 4,
    },
    modules: ['@nuxt/ui', '@nuxtjs/i18n'],
    colorMode: {
        preference: 'light'
    },
    i18n: {
        locales: [{
            code: 'en',
            name: 'English',
            file: 'en.json'
        }, {
            code: 'es',
            name: 'Spanish',
            file: 'es.json'
        }],
        lazy: true,
        defaultLocale: process.env.APP_LOCALE || 'en',
    }
})