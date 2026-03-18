import { lazy } from 'react'
import type { Routes } from '@/@types/routes'

export const publicRoutes: Routes = [
    {
        key: 'signIn',
        path: '/sign-in',
        component: lazy(() => import('@/views/auth/SignIn/SignIn')),
        authority: [],
    },
    {
        key: 'signUp',
        path: '/sign-up',
        component: lazy(() => import('@/views/auth/SignUp/SignUp')),
        authority: [],
    },
    {
        key: 'forgotPassword',
        path: '/forgot-password',
        component: lazy(
            () => import('@/views/auth/ForgotPassword/ForgotPassword'),
        ),
        authority: [],
    },
    {
        key: 'resetPassword',
        path: '/reset-password',
        component: lazy(() => import('@/views/auth/ResetPassword/ResetPassword')),
        authority: [],
    },
    {
        key: 'uiComponents',
        path: '/ui-components/*',
        component: lazy(() => import('@/views/ui-components/UiComponentsRouter')),
        authority: [],
    },
]

export const protectedRoutes: Routes = [
    {
        key: 'projectDashboard',
        path: '/project/dashboard',
        component: lazy(() => import('@/views/project/ProjectDashboard')),
        authority: [],
    },
    {
        key: 'projectList',
        path: '/project/project-list',
        component: lazy(() => import('@/views/project/ProjectList')),
        authority: [],
    },
    {
        key: 'scrumBoard',
        path: '/project/scrum-board',
        component: lazy(() => import('@/views/project/ScrumBoard')),
        authority: [],
    },
    {
        key: 'issue',
        path: '/project/issue',
        component: lazy(() => import('@/views/project/Issue')),
        authority: [],
    },
    {
        key: 'crmDashboard',
        path: '/crm/dashboard',
        component: lazy(() => import('@/views/crm/CrmDashboard')),
        authority: [],
    },
    {
        key: 'crmCalendar',
        path: '/crm/calendar',
        component: lazy(() => import('@/views/crm/Calendar')),
        authority: [],
    },
    {
        key: 'crmCustomers',
        path: '/crm/customers',
        component: lazy(() => import('@/views/crm/Customers')),
        authority: [],
    },
    {
        key: 'crmCustomerDetails',
        path: '/crm/customer-details',
        component: lazy(() => import('@/views/crm/CustomerDetail')),
        authority: [],
    },
    {
        key: 'crmMail',
        path: '/crm/mail',
        component: lazy(() => import('@/views/crm/Mail')),
        authority: [],
    },
    {
        key: 'crmMailCategory',
        path: '/crm/mail/:category',
        component: lazy(() => import('@/views/crm/Mail')),
        authority: [],
    },
    {
        key: 'salesDashboard',
        path: '/sales/dashboard',
        component: lazy(() => import('@/views/sales/SalesDashboard')),
        authority: [],
    },
    {
        key: 'salesProductList',
        path: '/sales/product-list',
        component: lazy(() => import('@/views/sales/ProductList')),
        authority: [],
    },
    {
        key: 'salesProductEdit',
        path: '/sales/product-edit/:productId',
        component: lazy(() => import('@/views/sales/ProductEdit')),
        authority: [],
    },
    {
        key: 'salesProductNew',
        path: '/sales/product-new',
        component: lazy(() => import('@/views/sales/ProductNew')),
        authority: [],
    },
    {
        key: 'salesOrderList',
        path: '/sales/order-list',
        component: lazy(() => import('@/views/sales/OrderList')),
        authority: [],
    },
    {
        key: 'salesOrderDetails',
        path: '/sales/order-details/:orderId',
        component: lazy(() => import('@/views/sales/OrderDetails')),
        authority: [],
    },
    {
        key: 'accountSettings',
        path: '/account/settings/:tab',
        component: lazy(() => import('@/views/account/Settings')),
        authority: [],
    },
    {
        key: 'accountInvoice',
        path: '/account/invoice/:id',
        component: lazy(() => import('@/views/account/Invoice')),
        authority: [],
    },
    {
        key: 'accountActivityLog',
        path: '/account/activity-log',
        component: lazy(() => import('@/views/account/ActivityLog')),
        authority: [],
    },
    {
        key: 'accountKycForm',
        path: '/account/kyc-form',
        component: lazy(() => import('@/views/account/KycForm')),
        authority: [],
    },
    {
        key: 'cryptoDashboard',
        path: '/crypto/dashboard',
        component: lazy(() => import('@/views/crypto/CryptoDashboard')),
        authority: [],
    },
    {
        key: 'cryptoPortfolio',
        path: '/crypto/portfolio',
        component: lazy(() => import('@/views/crypto/Portfolio')),
        authority: [],
    },
    {
        key: 'cryptoMarket',
        path: '/crypto/market',
        component: lazy(() => import('@/views/crypto/Market')),
        authority: [],
    },
    {
        key: 'cryptoWallets',
        path: '/crypto/wallets',
        component: lazy(() => import('@/views/crypto/Wallets')),
        authority: [],
    },
    {
        key: 'knowledgeBaseHelpCenter',
        path: '/knowledge-base/help-center',
        component: lazy(() => import('@/views/knowledge-base/HelpCenter')),
        authority: [],
    },
    {
        key: 'knowledgeBaseArticle',
        path: '/knowledge-base/article',
        component: lazy(() => import('@/views/knowledge-base/Article')),
        authority: [],
    },
    {
        key: 'knowledgeBaseManageArticles',
        path: '/knowledge-base/manage-articles',
        component: lazy(() => import('@/views/knowledge-base/ManageArticles')),
        authority: [],
    },
    {
        key: 'knowledgeBaseEditArticle',
        path: '/knowledge-base/edit-article',
        component: lazy(() => import('@/views/knowledge-base/EditArticle')),
        authority: [],
    },
    {
        key: 'prospectsAllProspects',
        path: '/prospects/all-prospects',
        component: lazy(() => import('@/views/prospects/AllProspects')),
        authority: [],
    },
    {
        key: 'docsDocumentation',
        path: '/docs/documentation/*',
        component: lazy(() => import('@/views/docs/Documentations')),
        authority: [],
    },
    {
        key: 'docsSharedComponentDoc',
        path: '/docs/shared-component-doc/*',
        component: lazy(() => import('@/views/docs/SharedComponentsDoc')),
        authority: [],
    },
    {
        key: 'docsChangeLog',
        path: '/docs/changelog',
        component: lazy(() => import('@/views/docs/ChangeLog')),
        authority: [],
    },
    {
        key: 'pagesWelcome',
        path: '/pages/welcome',
        component: lazy(() => import('@/views/pages/Welcome')),
        authority: [],
    },
    {
        key: 'accessDenied',
        path: '/access-denied',
        component: lazy(() => import('@/views/pages/AccessDenied')),
        authority: [],
    },
]

