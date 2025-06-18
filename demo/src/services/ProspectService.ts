import BaseService from '@/services/BaseService'

const Api = async function axiosApi<T>(url: string, method: string, data?: unknown): Promise<T> {
    return BaseService.request<T>({
        url,
        method,
        data,
    })
}

// 🚀 GET Prospect List
export async function apiGetAllProspects<T, U extends Record<string, unknown>>(data: U) {
    return Api<T>('/prospects/list', 'post', data)
}

// 🚀 GET Prospect Statistics
export async function apiGetAllProspectsStatistic<T>() {
    return Api<T>('/prospects/statistics', 'get')
}

// 🚀 PUT Update Prospect
export async function apiPutProspect<T, U extends Record<string, unknown>>(data: U) {
    return Api<T>('/prospects/update', 'put', data)
}
