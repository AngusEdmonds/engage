import store from './storeSetup'
import salesDashboardReducer from '@/views/sales/SalesDashboard/store/salesDashboardSlice'
injectReducer('salesDashboard', salesDashboardReducer)

export * from './storeSetup'
export * from './slices/auth'
export * from './slices/base'
export * from './slices/theme/themeSlice'
export * from './slices/locale/localeSlice'
export * from './rootReducer'
export * from './hook'
export default store