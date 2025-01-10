export default defineAppConfig({
    localSwitch: true,
    colorSwitch: true,
    auth: {
        register: true,
        forgotPassword: true,
        resetPassword: true,
        verifyEmail: true,
    },
    navigationItems: [{
        label: 'Dashboard',
        icon: 'i-lucide-layout-dashboard',
        route: {name: 'index'}
    }],
    ui: {
        colors: {
            primary: 'green',
            neutral: 'slate'
        }
    }
})