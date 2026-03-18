import { lazy, Suspense, useMemo } from 'react'
import type { ComponentType } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import Loading from '@/components/shared/Loading'

type RouteComponent = ComponentType<Record<string, unknown>>
type RouteModule = { default: RouteComponent }

const componentModules = import.meta.glob<RouteModule>(
    './**/index.tsx',
)

const toKebabCase = (value: string) =>
    value
        .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
        .replace(/\s+/g, '-')
        .toLowerCase()

const componentRouteMap = Object.entries(componentModules).reduce<
    Record<string, () => Promise<RouteModule>>
>((acc, [path, loader]) => {
    const segments = path.split('/')
    const componentDir = segments[segments.length - 2]

    if (componentDir) {
        acc[toKebabCase(componentDir)] = loader
    }

    return acc
}, {})

const DEFAULT_COMPONENT_ROUTE = '/ui-components/button'

const UiComponentsRouter = () => {
    const { pathname } = useLocation()
    const segments = pathname.split('/').filter(Boolean)
    const route = segments[segments.length - 1] || ''
    const loader = componentRouteMap[route]

    const Component = useMemo(() => {
        if (!loader) {
            return null
        }
        return lazy(loader)
    }, [loader])

    if (!route) {
        return <Navigate replace to={DEFAULT_COMPONENT_ROUTE} />
    }

    if (!Component) {
        return <Navigate replace to={DEFAULT_COMPONENT_ROUTE} />
    }

    return (
        <Suspense fallback={<Loading loading={true} />}>
            <Component />
        </Suspense>
    )
}

export default UiComponentsRouter
