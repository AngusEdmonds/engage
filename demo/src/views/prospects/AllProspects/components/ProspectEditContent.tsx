import { forwardRef } from 'react'
import {
    setProspectList,
    putProspect,
    setDrawerClose,
    Prospect,
} from '@/store/slices/allProspectsSlice'
import { useAppDispatch, useAppSelector } from '@/store'
import cloneDeep from 'lodash/cloneDeep'
import isEmpty from 'lodash/isEmpty'
import CustomerForm, { FormikRef, FormModel } from '@/views/crm/CustomerForm'
import dayjs from 'dayjs'

const ProspectEditContent = forwardRef<FormikRef>((_, ref) => {
    const dispatch = useAppDispatch()

    const prospect: Prospect = useAppSelector((state) => state.allProspects.selectedProspect)
    const data: Prospect[] = useAppSelector((state) => state.allProspects.prospectList)
    const { id } = prospect

    const onFormSubmit = (values: FormModel) => {
        const {
            name,
            birthday,
            email,
            img,
            location,
            title,
            phoneNumber,
            facebook,
            twitter,
            pinterest,
            linkedIn,
        } = values

        // Build updated basic + personal info
        const basicInfo = { name, email, img }
        const personalInfo = {
            location,
            title,
            birthday: dayjs(birthday).format('DD/MM/YYYY'),
            phoneNumber,
            facebook,
            twitter,
            pinterest,
            linkedIn,
        }

        // Update the selected prospect in list
        let newData: Prospect[] = cloneDeep(data)
        let editedProspect: Partial<Prospect> = {}

        newData = newData.map((elm) => {
            if (elm.id === id) {
                const updated = { ...elm, ...basicInfo }
                updated.personalInfo = { ...elm.personalInfo, ...personalInfo }
                editedProspect = updated
                return updated
            }
            return elm
        })

        if (!isEmpty(editedProspect)) {
            dispatch(putProspect(editedProspect as Prospect))
        }

        dispatch(setDrawerClose())
        dispatch(setProspectList(newData))
    }

    return (
        <CustomerForm
            ref={ref}
            customer={prospect}
            onFormSubmit={onFormSubmit}
        />
    )
})

ProspectEditContent.displayName = 'ProspectEditContent'

export type { FormikRef }

export default ProspectEditContent
