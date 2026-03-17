import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import prospectsData from '@/mock/data/prospectsData'
import { projectDashboardData } from '@/mock/data/projectData'
import BaseService from '@/services/BaseService'

console.log('✅ enableMock is TRUE — loading axiosMock.ts')
console.log('✅ prospectsData loaded:', Array.isArray(prospectsData) ? prospectsData.length : 'invalid')

const mockBase = new MockAdapter(BaseService, { delayResponse: 500 })
console.log('✅ MockAdapter initialising')

// === Prospects ===
mockBase.onPost('/prospects/list').reply((config) => {
    try {
        return [200, {
            data: prospectsData,
            total: prospectsData.length,
        }]
    } catch (err) {
        console.error('❌ Mock /api/prospects/list error:', err)
        return [500, { message: 'prospectsData is not defined' }]
    }
})

mockBase.onGet('/prospects/statistics').reply((config) => {
    try {
        const total = prospectsData.length
        const active = prospectsData.filter(p => p.status === 'active').length
        return [200, {
            totalProspects: { value: total, growShrink: 5 },
            activeProspects: { value: active, growShrink: 10 },
            newProspects: { value: 1, growShrink: 15 },
        }]
    } catch (err) {
        console.error('❌ Mock /api/prospects/statistics error:', err)
        return [500, { message: 'Error generating statistics' }]
    }
})

// === Dashboard ===
mockBase.onGet('/project/dashboard').reply(200, {
    ...projectDashboardData,
})

// === Notifications ===
mockBase.onGet('/notification/count').reply(200, {
    count: 3,
})

// === Catch-all fallback
mockBase.onAny().reply((config) => {
    console.error('❌ Unmatched request in Mock:', config.method, config.url)
    return [404, { message: 'Mock fallback 404' }]
})

export default mockBase
