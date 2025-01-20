export default defineAppConfig({
    localSwitch: true,
    colorSwitch: true,
    auth: {
        register: true,
        forgotPassword: true,
        resetPassword: true,
        verifyEmail: true,
    },
    mainNavigationItems: [{
        label: 'Dashboard',
        icon: 'i-lucide-layout-dashboard',
        route: {name: 'index'}
    }],
    secondaryNavigationItems: [
        //
    ],
    ui: {
        colors: {
            primary: 'green',
            neutral: 'slate'
        }
    }
})