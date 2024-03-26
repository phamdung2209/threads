import { GrHomeRounded } from 'react-icons/gr'
import config from '../configs'
import { FiSearch } from 'react-icons/fi'
import { FaRegEdit } from 'react-icons/fa'
import { FaRegHeart, FaRegUser } from 'react-icons/fa6'

type TMenuItem = {
    title: string
    to?: string
    icon?: JSX.Element
}[]

type TPrimaryHeaderButton = {
    to?: string
    icon: JSX.Element
}[]

export const MENU_ITEMS: TMenuItem = [
    {
        title: 'Appearance',
    },
    {
        title: 'Settings',
        to: '/settings/privacy',
    },
    {
        title: 'Saved',
        to: '/saved',
    },
    {
        title: 'Your likes',
        to: '/likes',
    },
    {
        title: 'Report a problem',
    },
    {
        title: 'Log out',
    },
]

export const PRIMARY_HEADER_BUTTONS: TPrimaryHeaderButton = [
    {
        to: config.routes.home,
        icon: <GrHomeRounded cursor={'pointer'} className="w-6 h-6" />,
    },
    {
        to: config.routes.home,
        icon: <FiSearch cursor={'pointer'} className="w-6 h-6" />,
    },
    {
        icon: <FaRegEdit cursor={'pointer'} className="w-6 h-6" />,
    },
    {
        to: config.routes.home,
        icon: <FaRegHeart cursor={'pointer'} className="w-6 h-6" />,
    },
    {
        to: config.routes.home,
        icon: <FaRegUser cursor={'pointer'} className="w-6 h-6" />,
    },
]
