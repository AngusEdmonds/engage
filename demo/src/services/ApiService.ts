// src/services/ApiService.ts

import BaseService from './BaseService'
import type { AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios'

const ApiService = {
    fetchData<Response = unknown, Request = Record<string, unknown>>(
        param: AxiosRequestConfig<Request>,
    ) {
        console.log('🚀 ApiService.fetchData - param:', param)  // ✅ debug log

        return new Promise<AxiosResponse<Response>>((resolve, reject) => {
            BaseService.request(param)  // ✅ FIXED this line
                .then((response: AxiosResponse<Response>) => {
                    console.log('✅ ApiService Response:', response)  // ✅ debug log
                    resolve(response)
                })
                .catch((errors: AxiosError) => {
                    console.error('❌ ApiService Error:', errors)  // ✅ debug log
                    reject(errors)
                })
        })
    },
}

export default ApiService
