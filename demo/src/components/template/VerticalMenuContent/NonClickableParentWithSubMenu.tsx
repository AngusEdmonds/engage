import Menu from '@/components/ui/Menu'
import Tooltip from '@/components/ui/Tooltip'
import VerticalMenuIcon from './VerticalMenuIcon'
import { useTranslation } from 'react-i18next'
import { Trans } from 'react-i18next'
import { Link } from 'react-router-dom'
import type { NavigationTree } from '@/@types/navigation'
import type { Direction } from '@/@types/theme'

const { MenuItem } = Menu

interface Props {
    nav: NavigationTree
    userAuthority: string[]
    direction?: Direction
    sideCollapsed?: boolean
    onLinkClick?: (link: { key: string; title: string; path: string }) => void
}

const NonClickableParentWithSubMenu = ({
    nav,
    userAuthority,
    direction,
    sideCollapsed,
    onLinkClick,
}: Props) => {
    const { t } = useTranslation()

    return (
        <div className="mt-4">
            <div className="px-[14px] py-2 text-gray-600 dark:text-gray-300 uppercase text-sm font-semibold">
                {!sideCollapsed && <span>{t(nav.translateKey) || nav.title}</span>}
            </div>
            <div className="pl-[px]">
                {nav.subMenu.map((subNav) => {
                    const menuItem = (
                        <MenuItem
                            key={subNav.key}
                            eventKey={subNav.key}
                            className="mb-[px]"
                        >
                            <Link
                                to={subNav.path || '#'}
                                className="flex items-center gap-2 h-full w-full"
                                onClick={() =>
                                    onLinkClick?.({
                                        key: subNav.key,
                                        title: subNav.title,
                                        path: subNav.path,
                                    })
                                }
                            >
                                <VerticalMenuIcon icon={subNav.icon} />
                                {!sideCollapsed && (
                                    <span>
                                        <Trans
                                            i18nKey={subNav.translateKey}
                                            defaults={subNav.title}
                                        />
                                    </span>
                                )}
                            </Link>
                        </MenuItem>
                    )

                    // ✅ Wrap with tooltip only when collapsed
                    return sideCollapsed ? (
                        <Tooltip
                            key={subNav.key}
                            title={subNav.translateKey || subNav.title}
                            placement={direction === 'rtl' ? 'left' : 'right'}
                        >
                            {menuItem}
                        </Tooltip>
                    ) : (
                        menuItem
                    )
                })}
            </div>
        </div>
    )
}

export default NonClickableParentWithSubMenu
