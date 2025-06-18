// src/utils/hooks/useAuth.ts

const useAuth = () => {
    // ✅ Temporary hardcoded dev auth
    return {
        authenticated: true,
        user: {
            name: 'Admin',
            email: 'admin@example.com',
            authority: ['admin'], // optional: used for role-based logic
        },
    }
}

export default useAuth
