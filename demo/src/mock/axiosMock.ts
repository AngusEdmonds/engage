import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import prospectsData from './data/prospectsData'

// ✅ Add console log so you know mock is working
console.log('✅ MockAdapter initialising')

// === Adapters ===
const mockBase = new MockAdapter(axios, { delayResponse: 500 })

// === Prospects ===
mockBase.onPost('/prospects/list').reply(200, {
    data: prospectsData,
    total: prospectsData.length,
})

mockBase.onGet('/prospects/statistics').reply(200, {
    totalProspects: { value: prospectsData.length, growShrink: 5 },
    activeProspects: {
        value: prospectsData.filter((p) => p.status === 'active').length,
        growShrink: 10,
    },
    newProspects: { value: 1, growShrink: 15 },
})

mockBase.onPut('/prospects/update').reply(200, {
    success: true,
})

// === Project Dashboard (✅ FIXED) ===
mockBase.onGet('/project/dashboard').reply(200, {
    projectCount: 4,
    activeProjects: 2,
    archivedProjects: 1,
    recentActivity: [
        { id: 1, title: 'Created new project: Engage Beta', date: '2025-06-15' },
        { id: 2, title: 'Archived: Solar Outreach v1', date: '2025-06-14' },
    ],
})

// === Dashboard (Elstar default) ===
mockBase.onGet('/dashboard/analytic').reply(200, {
    sales: 5000,
    orders: 250,
    profit: 2000,
    customers: 120,
})

mockBase.onGet('/dashboard/sales').reply(200, {
    revenue: [1000, 1500, 1200, 1800, 2200],
    profit: [400, 600, 500, 700, 800],
})

mockBase.onGet('/dashboard/recent-transactions').reply(200, {
    transactions: [
        { id: 1, user: 'John Doe', amount: 120, status: 'Completed' },
        { id: 2, user: 'Jane Smith', amount: 90, status: 'Pending' },
    ],
})

// === Knowledge Base ===
mockBase.onGet('/knowledge-base/articles').reply(200, {
    articles: [
        { id: 1, title: 'Getting Started with Engage', category: 'Basics' },
        { id: 2, title: 'How to manage Prospects', category: 'Prospects' },
    ],
})

// === Notifications ===
mockBase.onGet('/notification/count').reply(200, {
    count: 3,
})

// === Auth ===
mockBase.onPost(/\/auth\/login$/).reply(200, {
    token: 'mocked-token-123',
    user: {
        userName: 'admin',
        authority: ['admin'],
        avatar: '',
        email: 'admin@example.com',
        rawDomain: 'mocked-domain.com',
    },
})

mockBase.onPost('/sign-in').reply(200, {
    token: 'mocked-token-123',
    user: {
        userName: 'admin',
        authority: ['admin'],
        avatar: '',
        email: 'admin@example.com',
        rawDomain: 'mocked-domain.com',
    },
})

// === CRM fallback mock ===
mockBase.onGet(new RegExp('^/crm/.*')).reply(200, {
    message: 'Mocked CRM GET fallback',
})

mockBase.onPost(new RegExp('^/crm/.*')).reply(200, {
    message: 'Mocked CRM POST fallback',
})

// === Fallback for unmatched routes
mockBase.onAny().reply((config) => {
    console.log('❌ Unmatched request in Mock:', config.method, config.url)
    return [404, { message: 'Mock fallback 404' }]
})

export default mockBase
