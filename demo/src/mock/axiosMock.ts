import axios from 'axios'
import BaseService from '@/services/BaseService'
import MockAdapter from 'axios-mock-adapter'
import prospectsData from '@/mock/data/prospectsData'
console.log('✅ prospectsData loaded:', prospectsData.length)

// 🚀 Add console log to know mock is running
console.log('✅ MockAdapter initialising')

// === Adapters ===
const mockBase = new MockAdapter(axios, { delayResponse: 500 })
const mockGlobal = new MockAdapter((axios as any).default || axios, { delayResponse: 500 })

// === Prospects ===
try {
  mockBase.onPost('/api/prospects/list').reply(200, {
    data: prospectsData,
    total: prospectsData.length,
  })
} catch (err) {
  console.error('🔥 /api/prospects/list mock error:', err)
}

try {
  mockBase.onGet('/api/prospects/statistics').reply(200, {
    totalProspects: { value: prospectsData.length, growShrink: 5 },
    activeProspects: {
      value: prospectsData.filter((p) => p.status === 'active').length,
      growShrink: 10,
    },
    newProspects: { value: 1, growShrink: 15 },
  })
} catch (err) {
  console.error('🔥 /api/prospects/statistics mock error:', err)
}

// === Dashboard ===
mockBase.onGet('/api/dashboard/analytic').reply(200, {
  sales: 5000,
  orders: 250,
  profit: 2000,
  customers: 120,
})

mockBase.onGet('/api/dashboard/sales').reply(200, {
  revenue: [1000, 1500, 1200, 1800, 2200],
  profit: [400, 600, 500, 700, 800],
})

mockBase.onGet('/api/dashboard/recent-transactions').reply(200, {
  transactions: [
    { id: 1, user: 'John Doe', amount: 120, status: 'Completed' },
    { id: 2, user: 'Jane Smith', amount: 90, status: 'Pending' },
  ],
})

// === Notifications ===
mockBase.onGet('/api/notification/count').reply(200, {
  count: 3,
})

// === Fallback
mockBase.onAny().reply((config) => {
  console.warn('❌ Unmatched request in Mock:', config.method?.toUpperCase(), config.url)
  return [404, { message: 'Mock fallback 404' }]
})

export default mockBase
