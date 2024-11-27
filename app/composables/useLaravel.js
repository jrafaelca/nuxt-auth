export const useLaravel = () => {
    function mapFormErrors(errors = {}) {
        return Object
            .entries(errors)
            .map(([key, messages]) => ({
                name: key,
                message: messages[0] ?? '',
            }));
    }

    return {
        mapFormErrors
    }
}