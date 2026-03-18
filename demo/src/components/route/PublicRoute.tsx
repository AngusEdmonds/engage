import { Navigate, Outlet, useLocation } from 'react-router-dom'
import appConfig from '@/configs/app.config'
import useAuth from '@/utils/hooks/useAuth'

const { authenticatedEntryPath } = appConfig

const PublicRoute = () => {
    const { authenticated } = useAuth()
    const location = useLocation()
    const isPublicAllowedWhenAuthed = location.pathname.startsWith('/ui-components')

    if (authenticated && !isPublicAllowedWhenAuthed) {
        return <Navigate to={authenticatedEntryPath} />
    }

    return <Outlet />
}

export default PublicRoute
