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
    const data = useAppSelector((state) => state.crmSalesDashboard.data)
    const loading = useAppSelector((state) => state.crmSalesDashboard.loading)

    useEffect(() => {
        dispatch(getSalesDashboardData())
    }, [dispatch])

    if (loading || !data) {
        return <div className="p-6">Loading dashboard...</div>
    }

    const statistics = data.statistics ?? []
    const topProducts = data.topProduct ?? []
    const salesReport = data.salesReport ?? []
    const categories = data.salesByCategories ?? []
    const latestOrders = data.latestOrder ?? []

    return (
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
            <Statistic data={statistics} />
            <TopProduct data={topProducts} />
            <SalesReport data={salesReport} />
            <SalesByCategories data={categories} />
            <LatestOrder data={latestOrders} />
        </div>
    )
}

export default SalesDashboardBody
