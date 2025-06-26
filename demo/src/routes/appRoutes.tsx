import { lazy } from 'react'
import { Navigate } from 'react-router-dom'
import ClassicLayout from '@/components/layouts/ClassicLayout'
import BlankLayout from '@/components/layouts/BlankLayout'
import SignIn from '@/views/auth/SignIn/SignIn'

// Auth
const SignIn = lazy(() => import('@/views/auth/SignIn'))
const SignUp = lazy(() => import('@/views/auth/SignUp'))
const ForgotPassword = lazy(() => import('@/views/auth/ForgotPassword'))
const ResetPassword = lazy(() => import('@/views/auth/ResetPassword'))

// Dashboard & Project
const ProjectDashboard = lazy(() => import('@/views/project/ProjectDashboard'))
const ProjectList = lazy(() => import('@/views/project/ProjectList'))
const ScrumBoard = lazy(() => import('@/views/project/ScrumBoard'))
const Issue = lazy(() => import('@/views/project/Issue'))

// CRM
const CrmDashboard = lazy(() => import('@/views/crm/CrmDashboard'))
const Calendar = lazy(() => import('@/views/crm/Calendar'))
const Customers = lazy(() => import('@/views/crm/Customers'))
const CustomerDetail = lazy(() => import('@/views/crm/CustomerDetail'))
const Mail = lazy(() => import('@/views/crm/Mail'))

// Sales
const SalesDashboard = lazy(() => import('@/views/sales/SalesDashboard'))
const ProductList = lazy(() => import('@/views/sales/ProductList'))
const ProductEdit = lazy(() => import('@/views/sales/ProductEdit'))
const ProductNew = lazy(() => import('@/views/sales/ProductNew'))
const OrderList = lazy(() => import('@/views/sales/OrderList'))
const OrderDetails = lazy(() => import('@/views/sales/OrderDetails'))

// Account
const Settings = lazy(() => import('@/views/account/Settings'))
const Invoice = lazy(() => import('@/views/account/Invoice'))
const ActivityLog = lazy(() => import('@/views/account/ActivityLog'))
const KycForm = lazy(() => import('@/views/account/KycForm'))

// Crypto
const CryptoDashboard = lazy(() => import('@/views/crypto/CryptoDashboard'))
const Portfolio = lazy(() => import('@/views/crypto/Portfolio'))
const Market = lazy(() => import('@/views/crypto/Market'))
const Wallets = lazy(() => import('@/views/crypto/Wallets'))

// Knowledge Base
const HelpCenter = lazy(() => import('@/views/knowledge-base/HelpCenter'))
const Article = lazy(() => import('@/views/knowledge-base/Article'))
const ManageArticles = lazy(() => import('@/views/knowledge-base/ManageArticles'))
const EditArticle = lazy(() => import('@/views/knowledge-base/EditArticle'))

// Prospects
const AllProspects = lazy(() => import('@/views/prospects/AllProspects'))

// Docs & UI Pages
const Documentation = lazy(() => import('@/views/docs/Documentations'))
const SharedComponentsDoc = lazy(() => import('@/views/docs/SharedComponentsDoc'))
const ChangeLog = lazy(() => import('@/views/docs/ChangeLog'))
const Welcome = lazy(() => import('@/views/pages/Welcome'))
const AccessDenied = lazy(() => import('@/views/pages/AccessDenied'))

const appRoutes = [
    {
        path: '/',
        element: <Navigate to="/app/project/dashboard" replace />
    },
    {
    path: '/sign-in',
    element: (
        <BlankLayout>
            <SignIn />
        </BlankLayout>
    )
}
    {
        path: '/sign-up',
        element: (
            <BlankLayout>
                <SignUp />
            </BlankLayout>
        )
    },
    {
        path: '/forgot-password',
        element: (
            <BlankLayout>
                <ForgotPassword />
            </BlankLayout>
        )
    },
    {
        path: '/reset-password',
        element: (
            <BlankLayout>
                <ResetPassword />
            </BlankLayout>
        )
    },
    {
        path: '/app',
        element: <ClassicLayout />,
        children: [
            { path: 'project/dashboard', element: <ProjectDashboard /> },
            { path: 'project/project-list', element: <ProjectList /> },
            { path: 'project/scrum-board', element: <ScrumBoard /> },
            { path: 'project/issue', element: <Issue /> },
            { path: 'crm/dashboard', element: <CrmDashboard /> },
            { path: 'crm/calendar', element: <Calendar /> },
            { path: 'crm/customers', element: <Customers /> },
            { path: 'crm/customer-details', element: <CustomerDetail /> },
            { path: 'crm/mail', element: <Mail /> },
            { path: 'crm/mail/:category', element: <Mail /> },
            { path: 'sales/dashboard', element: <SalesDashboard /> },
            { path: 'sales/product-list', element: <ProductList /> },
            { path: 'sales/product-edit/:productId', element: <ProductEdit /> },
            { path: 'sales/product-new', element: <ProductNew /> },
            { path: 'sales/order-list', element: <OrderList /> },
            { path: 'sales/order-details/:orderId', element: <OrderDetails /> },
            { path: 'account/settings/:tab', element: <Settings /> },
            { path: 'account/invoice/:id', element: <Invoice /> },
            { path: 'account/activity-log', element: <ActivityLog /> },
            { path: 'account/kyc-form', element: <KycForm /> },
            { path: 'crypto/dashboard', element: <CryptoDashboard /> },
            { path: 'crypto/portfolio', element: <Portfolio /> },
            { path: 'crypto/market', element: <Market /> },
            { path: 'crypto/wallets', element: <Wallets /> },
            { path: 'knowledge-base/help-center', element: <HelpCenter /> },
            { path: 'knowledge-base/article', element: <Article /> },
            { path: 'knowledge-base/manage-articles', element: <ManageArticles /> },
            { path: 'knowledge-base/edit-article', element: <EditArticle /> },
            { path: 'prospects/all-prospects', element: <AllProspects /> },
            { path: 'docs/documentation/*', element: <Documentation /> },
            { path: 'docs/shared-component-doc/*', element: <SharedComponentsDoc /> },
            { path: 'docs/changelog', element: <ChangeLog /> },
            { path: 'pages/welcome', element: <Welcome /> },
            { path: 'access-denied', element: <AccessDenied /> },
            { index: true, element: <Navigate to="/app/project/dashboard" replace /> },
            { path: '*', element: <Navigate to="/app/project/dashboard" replace /> }
        ]
    },
    {
        path: '*',
        element: <Navigate to="/sign-in" replace />
    }
]

export default appRoutes
