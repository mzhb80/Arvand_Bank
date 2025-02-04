<script setup lang="ts">
import SidebarItem, { type SidebarItemType } from '@/components/sidebar/SidebarItem.vue';
import ChartLineDots from '@/assets/icons/chart-line-dots.svg'
import MoneyBills from '@/assets/icons/money-bills.svg'
import CoinCardTransfer from '@/assets/icons/coid-card-transfer.svg'
import CreditCard from '@/assets/icons/credit-card.svg'
import MoneyBillConvert from '@/assets/icons/money-bill-convert.svg'
import SheildLock from '@/assets/icons/sheild-lock.svg'
import UsersGroups from '@/assets/icons/users-groups.svg'
import { useBreakpoints, breakpointsTailwind } from '@vueuse/core';
import { computed, watchEffect } from 'vue';

const sidebarItems: SidebarItemType[] = [
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

const breakpoints = useBreakpoints(breakpointsTailwind)

const showText = computed(() => breakpoints.greaterOrEqual('md').value)
</script>

<template>
    <div class="border-e-1 p-6 h-100vh">
        <SidebarItem v-for="item, index in sidebarItems" :key="index" :icon="item.icon" :link="item.link"
            :show-text="showText" :sub-items="item.subItems" :text="item.text" />
    </div>
</template>