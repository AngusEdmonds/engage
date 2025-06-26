import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '@/store'
import { getSalesDashboardData } from '@/views/sales/SalesDashboard/store/salesDashboardSlice'

import Statistic from './Statistic'
import TopProduct from './TopProduct'
import SalesReport from './SalesReport'
import SalesByCategories from './SalesByCategories'
import LatestOrder from './LatestOrder'

const SalesDashboardBody = () => {
    const dispatch = useAppDispatch()

    const data = useAppSelector((state) => state.salesDashboard?.data)
    const loading = useAppSelector((state) => state.salesDashboard?.loading)

    useEffect(() => {
        dispatch(getSalesDashboardData())
    }, [dispatch])

    if (loading || !data) {
        return <div className="p-6">Loading dashboard...</div>
    }

    return (
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
            <Statistic data={data.statistics ?? []} />
            <TopProduct data={data.topProduct ?? []} />
            <SalesReport data={data.salesReport ?? []} />
            <SalesByCategories data={data.salesByCategories ?? []} />
            <LatestOrder data={data.latestOrder ?? []} />
        </div>
    )
}

export default SalesDashboardBody
