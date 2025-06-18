import { useRef } from 'react'
import Button from '@/components/ui/Button'
import { useAppSelector, useAppDispatch } from '@/store'
import {
    getProspects,
    setTableData,
    setFilterData,
} from '@/store/slices/allProspectsSlice'
import AllProspectsTableSearch from './AllProspectsTableSearch'
import AllProspectsTableFilter from './AllProspectsTableFilter'
import cloneDeep from 'lodash/cloneDeep'
import type { TableQueries } from '@/@types/common'

const AllProspectsTableTools = () => {
    const dispatch = useAppDispatch()

    const inputRef = useRef<HTMLInputElement>(null)

    const tableData = useAppSelector(
        (state) => state.allProspects.tableData
    )

    const handleInputChange = (val: string) => {
        const newTableData = cloneDeep(tableData)
        newTableData.query = val
        newTableData.pageIndex = 1
        if (typeof val === 'string' && val.length > 1) {
            fetchData(newTableData)
        }

        if (typeof val === 'string' && val.length === 0) {
            fetchData(newTableData)
        }
    }

    const fetchData = (data: TableQueries) => {
        dispatch(setTableData(data))
        dispatch(getProspects(data))
    }

    const onClearAll = () => {
        const newTableData = cloneDeep(tableData)
        newTableData.query = ''
        if (inputRef.current) {
            inputRef.current.value = ''
        }
        dispatch(setFilterData({ status: '' }))
        fetchData(newTableData)
    }

    return (
        <div className="md:flex items-center justify-between">
            <div className="md:flex items-center gap-4">
                <AllProspectsTableSearch
                    ref={inputRef}
                    onInputChange={handleInputChange}
                />
                <AllProspectsTableFilter />
            </div>
            <div className="mb-4">
                <Button size="sm" onClick={onClearAll}>
                    Clear All
                </Button>
            </div>
        </div>
    )
}

export default AllProspectsTableTools
