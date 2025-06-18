import navigationIcon from '@/configs/navigation-icon.config'
import type { ElementType } from 'react'

type VerticalMenuIconProps = {
    icon: ElementType | string
    gutter?: boolean
}

const VerticalMenuIcon = ({ icon, gutter = true }: VerticalMenuIconProps) => {
    if (!icon) return null

    // If the icon is a string, look it up in the icon config
    if (typeof icon === 'string') {
        const IconComponent = navigationIcon[icon]
        return IconComponent ? (
            <span className={`text-2xl ${gutter ? 'ltr:mr-2 rtl:ml-2' : ''}`}>
                {IconComponent}
            </span>
        ) : null
    }

    // If the icon is a React component, render it directly
    const Icon = icon
    return (
        <span className={`text-2xl ${gutter ? 'ltr:mr-2 rtl:ml-2' : ''}`}>
            <Icon />
        </span>
    )
}

export default VerticalMenuIcon
