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

    const dashboardData = useAppSelector(
        (state) => state.salesDashboard?.data?.dashboardData,
    )
    const loading = useAppSelector((state) => state.salesDashboard?.data?.loading)

    useEffect(() => {
        dispatch(getSalesDashboardData())
    }, [dispatch])

    if (loading || !dashboardData) {
        return <div className="p-6">Loading dashboard...</div>
    }

    return (
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
            <Statistic data={dashboardData.statisticData} />
            <TopProduct data={dashboardData.topProductsData} />
            <SalesReport data={dashboardData.salesReportData} />
            <SalesByCategories data={dashboardData.salesByCategoriesData} />
            <LatestOrder data={dashboardData.latestOrderData} />
        </div>
    )
}

export default SalesDashboardBody
