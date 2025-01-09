export default defineAppConfig({
    localSwitch: true,
    colorSwitch: true,
    auth: {
        register: true,
        forgotPassword: true,
        resetPassword: true,
        verifyEmail: true,
    },
    navigationItems: [
        //
    ],
    ui: {
        colors: {
            primary: 'green',
            neutral: 'slate'
        }
    }
})