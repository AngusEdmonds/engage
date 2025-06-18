import { useEffect } from 'react'
import Card from '@/components/ui/Card'
import Avatar from '@/components/ui/Avatar'
import GrowShrinkTag from '@/components/shared/GrowShrinkTag'
import MediaSkeleton from '@/components/shared/loaders/MediaSkeleton'
import Loading from '@/components/shared/Loading'
import { useAppSelector, useAppDispatch } from '@/store'
import { getProspectStatistic } from '@/store/slices/allProspectsSlice'
import {
    HiOutlineUserGroup,
    HiOutlineUserAdd,
    HiOutlineUsers,
} from 'react-icons/hi'
import { NumericFormat } from 'react-number-format'
import type { ReactNode } from 'react'

type StatisticCardProps = {
    icon: ReactNode
    avatarClass: string
    label: string
    value?: number
    growthRate?: number
    loading: boolean
}

const StatisticCard = (props: StatisticCardProps) => {
    const { icon, avatarClass, label, value, growthRate, loading } = props

    const avatarSize = 55

    return (
        <Card bordered>
            <Loading
                loading={loading}
                customLoader={
                    <MediaSkeleton
                        avatarProps={{
                            className: 'rounded-sm',
                            width: avatarSize,
                            height: avatarSize,
                        }}
                    />
                }
            >
                <div className="flex justify-between items-center">
                    <div className="flex items-center gap-4">
                        <Avatar
                            className={avatarClass}
                            size={avatarSize}
                            icon={icon}
                        />
                        <div>
                            <span>{label}</span>
                            <h3>
                                <NumericFormat
                                    thousandSeparator
                                    displayType="text"
                                    value={value}
                                />
                            </h3>
                        </div>
                    </div>
                    <GrowShrinkTag value={growthRate} suffix="%" />
                </div>
            </Loading>
        </Card>
    )
}

const ProspectStatistic = () => {
    const dispatch = useAppDispatch()

    const statisticData = useAppSelector(
        (state) => state.allProspects.statisticData
    )
    const loading = useAppSelector(
        (state) => state.allProspects.statisticLoading
    )

    useEffect(() => {
        dispatch(getProspectStatistic())
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 mb-6">
            <StatisticCard
                icon={<HiOutlineUserGroup />}
                avatarClass="bg-indigo-600!"
                label="Total Prospects"
                value={statisticData?.totalProspects?.value}
                growthRate={statisticData?.totalProspects?.growShrink}
                loading={loading}
            />
            <StatisticCard
                icon={<HiOutlineUsers />}
                avatarClass="bg-blue-500!"
                label="Active Prospects"
                value={statisticData?.activeProspects?.value}
                growthRate={statisticData?.activeProspects?.growShrink}
                loading={loading}
            />
            <StatisticCard
                icon={<HiOutlineUserAdd />}
                avatarClass="bg-emerald-500!"
                label="New Prospects"
                value={statisticData?.newProspects?.value}
                growthRate={statisticData?.newProspects?.growShrink}
                loading={loading}
            />
        </div>
    )
}

export default ProspectStatistic
