import ChartLineDots from '@/assets/icons/chart-line-dots.svg'
import MoneyBills from '@/assets/icons/money-bills.svg'
import CoinCardTransfer from '@/assets/icons/coid-card-transfer.svg'
import CreditCard from '@/assets/icons/credit-card.svg'
import MoneyBillConvert from '@/assets/icons/money-bill-convert.svg'
import SheildLock from '@/assets/icons/sheild-lock.svg'
import UsersGroups from '@/assets/icons/users-groups.svg'

export type SidebarItemType = {
    text: string
    icon: string
    link?: string
    subItems?: {
        text: string
        link: string
    }[]
}

export const Static_Sidebar_Items: SidebarItemType[] = [
    { 
        text: 'داشبورد',
        link: '/',
        icon: ChartLineDots,
        subItems: [
            { link: '/1', text: 'تست 1', },
            { link: '/2', text: 'تست 2', },
            { link: '/3', text: 'تست 3', },
            { link: '/4', text: 'تست 4', },
        ]
    },
    { 
        text: 'مدیریت حساب',
        link: '/',
        icon: MoneyBills,
        subItems: [
            { link: '/1', text: 'تست 1', },
            { link: '/2', text: 'تست 2', },
            { link: '/3', text: 'تست 3', },
            { link: '/4', text: 'تست 4', },
        ]
    },
    { 
        text: 'پرداخت',
        link: '/',
        icon: CoinCardTransfer,
        subItems: [
            { link: '/1', text: 'تست 1', },
            { link: '/2', text: 'تست 2', },
            { link: '/3', text: 'تست 3', },
            { link: '/4', text: 'تست 4', },
        ]
    },
    { 
        text: 'خدمات کارت',
        link: '/',
        icon: CreditCard,
        subItems: [
            { link: '/1', text: 'تست 1', },
            { link: '/2', text: 'تست 2', },
            { link: '/3', text: 'تست 3', },
            { link: '/4', text: 'تست 4', },
        ]
    },
    { 
        text: 'مدیریت وام',
        link: '/',
        icon: MoneyBillConvert,
        subItems: [
            { link: '/1', text: 'تست 1', },
            { link: '/2', text: 'تست 2', },
            { link: '/3', text: 'تست 3', },
            { link: '/4', text: 'تست 4', },
        ]
    },
    { 
        text: 'امنیت و تنظیمات',
        link: '/',
        icon: SheildLock,
        subItems: [
            { link: '/1', text: 'تست 1', },
            { link: '/2', text: 'تست 2', },
            { link: '/3', text: 'تست 3', },
            { link: '/4', text: 'تست 4', },
        ]
    },
    { 
        text: 'خدمات مشتریان',
        link: '/',
        icon: UsersGroups,
        subItems: [
            { link: '/1', text: 'تست 1', },
            { link: '/2', text: 'تست 2', },
            { link: '/3', text: 'تست 3', },
            { link: '/4', text: 'تست 4', },
        ]
    },
]