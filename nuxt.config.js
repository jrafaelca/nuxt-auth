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
    modules: ['@nuxt/ui', '@nuxtjs/i18n'],
    css: ['@/assets/css/main.css'],
    i18n: {
        locales: [{
            code: 'en',
            name: 'English',
            file: 'en.json'
        }, {
            code: 'es',
            name: 'Español',
            file: 'es.json'
        }],
        lazy: true,
        defaultLocale: process.env.APP_LOCALE || 'en',
    },
    compatibilityDate: '2024-04-03',
    future: {
        compatibilityVersion: 4,
    },
    devtools: {enabled: true},
})