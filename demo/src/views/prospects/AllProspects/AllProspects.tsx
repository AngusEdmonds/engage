import { useEffect } from 'react'
import { useAppSelector, useAppDispatch } from '@/store'
import { injectReducer } from '@/store'
import allProspectsReducer from '@/store/slices/allProspectsSlice'

import AdaptableCard from '@/components/shared/AdaptableCard'
import AllProspectsTable from './components/AllProspectsTable'
import AllProspectsTableTools from './components/AllProspectsTableTools'
import ProspectStatistic from './components/ProspectStatistic'
import { getProspects } from '@/store/slices/allProspectsSlice'

// ✅ Inject reducer under the correct slice name
injectReducer('allProspects', allProspectsReducer)

const AllProspects = () => {
    const dispatch = useAppDispatch()

    const { pageIndex, pageSize, sort, query, filterData } = useAppSelector(
        (state) => state.allProspects.tableData
    )

    useEffect(() => {
        console.log('Triggered getProspects()') // 👈 Added quick check log
        console.log('🟢 useEffect running → dispatching getProspects()', {
            pageIndex,
            pageSize,
            sort,
            query,
            filterData,
        })
        dispatch(getProspects({ pageIndex, pageSize, sort, query, filterData }))
    }, [dispatch, pageIndex, pageSize, sort, query, filterData])

    return (
        <>
            <ProspectStatistic />
            <AdaptableCard className="h-full" bodyClass="h-full">
                <AllProspectsTableTools />
                <AllProspectsTable />
            </AdaptableCard>
        </>
    )
}

export default AllProspects
