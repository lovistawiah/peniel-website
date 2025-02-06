import { FaUsers, FaPhoneAlt, } from 'react-icons/fa'
import { GiBookshelf, GiChurch, } from 'react-icons/gi'
import { PiHandCoinsBold } from 'react-icons/pi'
export const SIDEBARLIST = [
    {
        id: 1,
        title: 'About Us',
        href: '/about-us',
        icon: GiChurch,
    },
    {
        id: 2,
        title: 'Contact Us',
        href: '/contact-us',
        icon: FaPhoneAlt,
    },
    {
        id: 3,
        title: 'Ministries',
        href: '/ministries',
        icon: FaUsers,
    },
    {
        id: 4,
        title: 'Books',
        href: '/books',
        icon: GiBookshelf,
    },
    {
        id: 5,
        title: 'Give',
        href: '/give',
        icon: PiHandCoinsBold,
    },
]