const useAuth = () => {
    return {
        signIn: async () => ({ status: 'success' }),
        signOut: () => {},
        authenticated: true,
        user: {
            userName: 'demo',
        },
    }
}

export default useAuth
