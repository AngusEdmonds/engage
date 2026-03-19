import { Navigate, Outlet, useLocation } from 'react-router-dom'
import appConfig from '@/configs/app.config'
import useAuth from '@/utils/hooks/useAuth'

const { authenticatedEntryPath } = appConfig

const PublicRoute = () => {
    const { authenticated } = useAuth()
    const location = useLocation()
    const isPublicAllowedWhenAuthed =
        location.pathname.startsWith('/ui-components') ||
        location.pathname.startsWith('/pages/') ||
        location.pathname === '/access-denied' ||
        location.pathname.startsWith('/auth/') ||
        location.pathname.startsWith('/docs/')

    if (authenticated && !isPublicAllowedWhenAuthed) {
        return <Navigate to={authenticatedEntryPath} />
    }

    return <Outlet />
}

export default PublicRoute
