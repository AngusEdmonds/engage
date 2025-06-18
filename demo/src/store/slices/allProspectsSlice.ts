import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import {
    apiGetAllProspects,
    apiPutProspect,
    apiGetAllProspectsStatistic,
} from '@/services/ProspectService'
import type { TableQueries } from '@/@types/common'

// === Types ===
type PersonalInfo = {
    location: string
    title: string
    birthday: string
    phoneNumber: string
    facebook: string
    twitter: string
    pinterest: string
    linkedIn: string
}

type OrderHistory = {
    id: string
    item: string
    status: string
    amount: number
    date: number
}

type PaymentMethod = {
    cardHolderName: string
    cardType: string
    expMonth: string
    expYear: string
    last4Number: string
    primary: boolean
}

type Subscription = {
    plan: string
    status: string
    billing: string
    nextPaymentDate: number
    amount: number
}

export type Prospect = {
    id: string
    name: string
    email: string
    img: string
    role: string
    lastOnline: number
    status: string
    personalInfo: PersonalInfo
    orderHistory: OrderHistory[]
    paymentMethod: PaymentMethod[]
    subscription: Subscription[]
}

type Statistic = {
    value: number
    growShrink: number
}

type ProspectStatistic = {
    totalProspects: Statistic
    activeProspects: Statistic
    newProspects: Statistic
}

type Filter = {
    status: string
}

type GetAllProspectsResponse = {
    data: Prospect[]
    total: number
}

type GetAllProspectsStatisticResponse = ProspectStatistic

export type ProspectsState = {
    loading: boolean
    statisticLoading: boolean
    prospectList: Prospect[]
    statisticData: Partial<ProspectStatistic>
    tableData: TableQueries
    filterData: Filter
    drawerOpen: boolean
    selectedProspect: Partial<Prospect>
}

export const SLICE_NAME = 'allProspects'

// === Thunks ===
export const getProspectStatistic = createAsyncThunk(
    `${SLICE_NAME}/data/getProspectStatistic`,
    async () => {
        console.log('🚀 Dispatching getProspectStatistic thunk')
        const response = await apiGetAllProspectsStatistic<GetAllProspectsStatisticResponse>()
        console.log('✅ getProspectStatistic response', response)
        return response.data
    },
)

export const getProspects = createAsyncThunk(
    `${SLICE_NAME}/data/getProspects`,
    async (data: TableQueries & { filterData?: Filter }) => {
        console.log('🚀 Dispatching getProspects thunk', data)
        const response = await apiGetAllProspects<
            GetAllProspectsResponse,
            TableQueries
        >(data)
        console.log('✅ getProspects thunk response', response)
        return response.data
    },
)

export const putProspect = createAsyncThunk(
    `${SLICE_NAME}/data/putProspect`,
    async (data: Prospect) => {
        const response = await apiPutProspect(data)
        return response.data
    },
)

// === State ===
export const initialTableData: TableQueries = {
    total: 0,
    pageIndex: 1,
    pageSize: 10,
    query: '',
    sort: {
        order: '',
        key: '',
    },
}

export const initialFilterData: Filter = {
    status: '',
}

const initialState: ProspectsState = {
    loading: false,
    statisticLoading: false,
    prospectList: [],
    statisticData: {},
    tableData: initialTableData,
    filterData: initialFilterData,
    drawerOpen: false,
    selectedProspect: {},
}

// === Slice ===
const allProspectsSlice = createSlice({
    name: SLICE_NAME,
    initialState,
    reducers: {
        setTableData: (state, action) => {
            state.tableData = action.payload
        },
        setProspectList: (state, action) => {
            state.prospectList = action.payload
        },
        setFilterData: (state, action) => {
            state.filterData = action.payload
        },
        setSelectedProspect: (state, action) => {
            state.selectedProspect = action.payload
        },
        setDrawerOpen: (state) => {
            state.drawerOpen = true
        },
        setDrawerClose: (state) => {
            state.drawerOpen = false
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getProspects.fulfilled, (state, action) => {
                console.log('✅ getProspects.fulfilled', action.payload)
                state.prospectList = action.payload.data
                state.tableData.total = action.payload.total
                state.loading = false
            })
            .addCase(getProspects.pending, (state) => {
                console.log('⏳ getProspects.pending')
                state.loading = true
            })
            .addCase(getProspects.rejected, (state, action) => {
                console.log('❌ getProspects.rejected', action.error)
                state.loading = false
            })
            .addCase(getProspectStatistic.fulfilled, (state, action) => {
                console.log('✅ getProspectStatistic.fulfilled', action.payload)
                state.statisticData = action.payload
                state.statisticLoading = false
            })
            .addCase(getProspectStatistic.pending, (state) => {
                console.log('⏳ getProspectStatistic.pending')
                state.statisticLoading = true
            })
            .addCase(getProspectStatistic.rejected, (state, action) => {
                console.log('❌ getProspectStatistic.rejected', action.error)
                state.statisticLoading = false
            })
    },
})

export const {
    setTableData,
    setProspectList,
    setFilterData,
    setSelectedProspect,
    setDrawerOpen,
    setDrawerClose,
} = allProspectsSlice.actions

export default allProspectsSlice.reducer
