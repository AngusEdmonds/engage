import {
    RiContactsFill,
    RiFlowChart,
} from 'react-icons/ri'
import {
    HiUserGroup,
    HiOutlineChartSquareBar,
    HiOutlineUserGroup,
    HiOutlineTrendingUp,
    HiOutlineUserCircle,
    HiOutlineBookOpen,
    HiOutlineCurrencyDollar,
    HiOutlineShieldCheck,
    HiOutlineColorSwatch,
    HiOutlineChatAlt,
    HiOutlineDesktopComputer,
    HiOutlinePaperAirplane,
    HiOutlineChartPie,
    HiOutlineUserAdd,
    HiOutlineKey,
    HiOutlineBan,
    HiOutlineHand,
    HiOutlineDocumentText,
    HiOutlineTemplate,
    HiOutlineLockClosed,
    HiOutlineDocumentDuplicate,
    HiOutlineViewGridAdd,
    HiOutlineShare,
    HiOutlineVariable,
    HiOutlineCode,
} from 'react-icons/hi'
import { BiSolidCategoryAlt } from 'react-icons/bi'
import { FaUpload, FaFileInvoiceDollar, FaUserShield } from 'react-icons/fa6'
import { SiMinutemailer } from 'react-icons/si'
import { IoCreate, IoSettingsSharp } from 'react-icons/io5'
import { MdMarkunreadMailbox } from 'react-icons/md'
import { GiPostOffice, GiDeerTrack } from 'react-icons/gi'
import { FaGlobe } from 'react-icons/fa'
import { IoIosMail } from 'react-icons/io'
import { CgProfile } from 'react-icons/cg'
import type { JSX } from 'react'

export type NavigationIcons = Record<string, JSX.Element>

const navigationIcon: NavigationIcons = {
    prospects: <RiContactsFill />,
    allProspects: <HiUserGroup />,
    groups: <BiSolidCategoryAlt />,
    upload: <FaUpload />,
    campaigns: <SiMinutemailer />,
    sequenceBuilder: <RiFlowChart />,
    templates: <IoCreate />,
    mailboxes: <MdMarkunreadMailbox />,
    ipAddresses: <GiPostOffice />,
    domainsDns: <FaGlobe />,
    customSubtracking: <GiDeerTrack />,
    inbox: <IoIosMail />,
    profile: <CgProfile />,
    userAccess: <FaUserShield />,
    billingInvoices: <FaFileInvoiceDollar />,
    settings: <IoSettingsSharp />,
    apps: <HiOutlineViewGridAdd />,
    project: <HiOutlineChartSquareBar />,
    crm: <HiOutlineUserGroup />,
    sales: <HiOutlineTrendingUp />,
    crypto: <HiOutlineCurrencyDollar />,
    knowledgeBase: <HiOutlineBookOpen />,
    account: <HiOutlineUserCircle />,
    uiComponents: <HiOutlineTemplate />,
    common: <HiOutlineColorSwatch />,
    feedback: <HiOutlineChatAlt />,
    dataDisplay: <HiOutlineDesktopComputer />,
    forms: <HiOutlineDocumentText />,
    navigation: <HiOutlinePaperAirplane />,
    graph: <HiOutlineChartPie />,
    authentication: <HiOutlineLockClosed />,
    signIn: <HiOutlineShieldCheck />,
    signUp: <HiOutlineUserAdd />,
    forgotPassword: <HiOutlineLockClosed />,
    resetPassword: <HiOutlineKey />,
    pages: <HiOutlineDocumentDuplicate />,
    welcome: <HiOutlineHand />,
    accessDenied: <HiOutlineBan />,
    guide: <HiOutlineBookOpen />,
    documentation: <HiOutlineDocumentText />,
    sharedComponentDoc: <HiOutlineShare />,
    utilsDoc: <HiOutlineVariable />,
    changeLog: <HiOutlineCode />,
}

export default navigationIcon
