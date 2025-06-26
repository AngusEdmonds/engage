import appConfig from '@/configs/app.config'
import { REDIRECT_URL_KEY } from '@/constants/app.constant'
import { Navigate, Outlet, useLocation } from 'react-router-dom'
import useAuth from '@/utils/hooks/useAuth'

const { unAuthenticatedEntryPath } = appConfig

const ProtectedRoute = () => {
    const { authenticated } = useAuth()
    const location = useLocation()

    console.log('🔐 [ProtectedRoute] Authenticated:', authenticated)
    console.log('🔐 [ProtectedRoute] Current Path:', location.pathname)

    if (!authenticated) {
        console.log(`🔐 [ProtectedRoute] Redirecting to ${unAuthenticatedEntryPath}`)
        return (
            <Navigate
                replace
                to={`${unAuthenticatedEntryPath}?${REDIRECT_URL_KEY}=${location.pathname}`}
            />
        )
    }

    return <Outlet />
}

export default ProtectedRoute
