import { useRef } from 'react'
import Button from '@/components/ui/Button'
import Drawer from '@/components/ui/Drawer'
import ProspectEditContent, { FormikRef } from './ProspectEditContent'
import { useAppSelector, useAppDispatch } from '@/store'
import {
    setDrawerClose,
    setSelectedProspect,
} from '@/store/slices/allProspectsSlice'
import type { MouseEvent } from 'react'

type DrawerFooterProps = {
    onSaveClick: (event: MouseEvent<HTMLButtonElement>) => void
    onCancel: (event: MouseEvent<HTMLButtonElement>) => void
}

const DrawerFooter = ({ onSaveClick, onCancel }: DrawerFooterProps) => {
    return (
        <div className="text-right w-full">
            <Button size="sm" className="mr-2" onClick={onCancel}>
                Cancel
            </Button>
            <Button size="sm" variant="solid" onClick={onSaveClick}>
                Save
            </Button>
        </div>
    )
}

const ProspectEditDialog = () => {
    const dispatch = useAppDispatch()
    const drawerOpen: boolean = useAppSelector((state) => state.allProspects.drawerOpen)
    const formikRef = useRef<FormikRef>(null)

    const onDrawerClose = () => {
        dispatch(setDrawerClose())
        dispatch(setSelectedProspect({}))
    }

    const formSubmit = () => {
        formikRef.current?.submitForm()
    }

    return (
        <Drawer
            isOpen={drawerOpen}
            closable={false}
            bodyClass="p-0"
            footer={
                <DrawerFooter
                    onCancel={onDrawerClose}
                    onSaveClick={formSubmit}
                />
            }
            onClose={onDrawerClose}
            onRequestClose={onDrawerClose}
        >
            <ProspectEditContent ref={formikRef} />
        </Drawer>
    )
}

export default ProspectEditDialog
