// src/components/layouts/Layouts.tsx
import { Suspense } from 'react'
import { useRoutes } from 'react-router-dom'
import appRoutes from '@/routes/appRoutes'
import Loading from '@/components/shared/Loading'

const Layout = () => {
    const routes = useRoutes(appRoutes)

    return (
        <Suspense
            fallback={
                <div className="flex flex-auto flex-col h-[100vh]">
                    <Loading loading={true} />
                </div>
            }
        >
            {routes}
        </Suspense>
    )
}

export default Layout
