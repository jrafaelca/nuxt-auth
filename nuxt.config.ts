// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-04-03',
    devtools: {enabled: true},
    future: {
        compatibilityVersion: 4,
    },
    modules: ['@nuxt/ui', '@nuxtjs/i18n'],
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