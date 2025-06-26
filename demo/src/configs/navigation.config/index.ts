import { MdDashboard, MdMarkunreadMailbox } from 'react-icons/md'
import { RiContactsFill, RiFlowChart } from 'react-icons/ri'
import { HiUserGroup } from 'react-icons/hi'
import { BiSolidCategoryAlt } from 'react-icons/bi'
import { FaUpload, FaFileInvoiceDollar, FaUserShield } from 'react-icons/fa6'
import { SiMinutemailer } from 'react-icons/si'
import { IoCreate, IoSettingsSharp } from 'react-icons/io5'
import { GiPostOffice, GiDeerTrack } from 'react-icons/gi'
import { FaGlobe } from 'react-icons/fa'
import { IoIosMail } from 'react-icons/io'
import { CgProfile } from 'react-icons/cg'
import { NAV_ITEM_TYPE_ITEM } from '@/constants/navigation.constant'
import appsNavigationConfig from './apps.navigation.config'
import uiComponentNavigationConfig from './ui-components.navigation.config'
import pagesNavigationConfig from './pages.navigation.config'
import authNavigationConfig from './auth.navigation.config'
import docNavigationConfig from './doc.navigation.config'
import type { NavigationTree } from '@/@types/navigation'

const customMenu = [
    {
        key: 'prospects',
        title: 'PROSPECTS',
        type: 'nonClickableParent',
        subMenu: [
            {
                key: 'allProspects',
                title: 'All Prospects',
                path: '/app/prospects/all-prospects',
                icon: 'allProspects',
                type: 'item',
                subMenu: []
            },
            {
                key: 'groups',
                title: 'Groups',
                path: '',
                icon: 'groups',
                type: 'item',
                subMenu: []
            },
            {
                key: 'upload',
                title: 'Upload',
                path: '',
                icon: 'upload',
                type: 'item',
                subMenu: []
            },
        ],
    },
    {
        key: 'outreach',
        title: 'OUTREACH',
        type: 'nonClickableParent',
        subMenu: [
            {
                key: 'campaigns',
                title: 'Campaigns',
                path: '',
                icon: 'campaigns',
                type: 'item',
                subMenu: []
            },
            {
                key: 'sequenceBuilder',
                title: 'Sequence builder',
                path: '',
                icon: 'sequenceBuilder',
                type: 'item',
                subMenu: []
            },
            {
                key: 'templates',
                title: 'Templates',
                path: '',
                icon: 'templates',
                type: 'item',
                subMenu: []
            },
        ],
    },
    {
        key: 'setup',
        title: 'SET UP',
        type: 'nonClickableParent',
        subMenu: [
            {
                key: 'mailboxes',
                title: 'Mailboxes',
                path: '',
                icon: 'mailboxes',
                type: 'item',
                subMenu: []
            },
            {
                key: 'ipAddresses',
                title: 'IP Addresses',
                path: '',
                icon: 'ipAddresses',
                type: 'item',
                subMenu: []
            },
            {
                key: 'domainsDns',
                title: 'Domains & DNS',
                path: '',
                icon: 'domainsDns',
                type: 'item',
                subMenu: []
            },
            {
                key: 'customSubtracking',
                title: 'Custom subtracking',
                path: '',
                icon: 'customSubtracking',
                type: 'item',
                subMenu: []
            },
        ],
    },
    {
        key: 'inbox',
        path: '',
        title: 'Inbox',
        icon: IoIosMail,
        breadcrumb: false,
        type: NAV_ITEM_TYPE_ITEM,
        subMenu: []
    },
    {
        key: 'account',
        title: 'ACCOUNT',
        type: 'nonClickableParent',
        subMenu: [
            {
                key: 'profile',
                title: 'Profile',
                path: '',
                icon: 'profile',
                type: 'item',
                subMenu: []
            },
            {
                key: 'userAccess',
                title: 'User Access',
                path: '',
                icon: 'userAccess',
                type: 'item',
                subMenu: []
            },
            {
                key: 'billingInvoices',
                title: 'Billing & Invoices',
                path: '',
                icon: 'billingInvoices',
                type: 'item',
                subMenu: []
            },
            {
                key: 'settings',
                title: 'Settings',
                path: '',
                icon: 'settings',
                type: 'item',
                subMenu: []
            },
        ],
    },
]

const navigationConfig: NavigationTree[] = [
    {
        key: 'homeDashboard',
        path: '/app/project/dashboard',
        title: 'Dashboard',
        icon: MdDashboard,
        breadcrumb: false,
        type: NAV_ITEM_TYPE_ITEM,
        subMenu: [],
    },
    ...customMenu,
    ...appsNavigationConfig,
    ...uiComponentNavigationConfig,
    ...pagesNavigationConfig,
    ...authNavigationConfig,
    ...docNavigationConfig,
]

export default navigationConfig
