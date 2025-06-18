import { forwardRef, useMemo } from 'react'
import Input from '@/components/ui/Input'
import { HiOutlineSearch } from 'react-icons/hi'
import debounce from 'lodash/debounce'
import type { ChangeEvent } from 'react'

type AllProspectsTableSearchProps = {
    onInputChange: (value: string) => void
}

const AllProspectsTableSearch = forwardRef<
    HTMLInputElement,
    AllProspectsTableSearchProps
>((props, ref) => {
    const { onInputChange } = props

    const debounceFn = useMemo(
        () => debounce((value: string) => onInputChange?.(value), 500),
        [onInputChange]
    )

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        debounceFn(e.target.value)
    }

    return (
        <Input
            ref={ref}
            className="max-w-md md:w-52 mb-4"
            size="sm"
            placeholder="Search"
            prefix={<HiOutlineSearch className="text-lg" />}
            onChange={handleInputChange}
        />
    )
})

AllProspectsTableSearch.displayName = 'AllProspectsTableSearch'

export default AllProspectsTableSearch
