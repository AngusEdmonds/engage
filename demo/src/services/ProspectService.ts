import appConfig from '@/configs/app.config'
import BaseService from './BaseService'

const Api = async function axiosApi<T>(url: string, method: string, data?: unknown): Promise<T> {
    return BaseService.fetchData<T>({
        url,
        method,
        data,
    })
}

// 🚀 GET Prospect List
export async function apiGetAllProspects<T, U extends Record<string, unknown>>(data: U) {
    console.log('🚀 Calling GET prospects list API', data)
    return Api<T>('/prospects/list', 'post', data)
}

// 🚀 GET Prospect Statistics
export async function apiGetAllProspectsStatistic<T>() {
    console.log('🚀 Calling GET prospect statistics API')
    return Api<T>('/prospects/statistics', 'get')
}

// 🚀 PUT Update Prospect
export async function apiPutProspect<T, U extends Record<string, unknown>>(data: U) {
    console.log('🚀 Calling PUT update prospect API', data)
    return Api<T>('/prospects/update', 'put', data)
}
