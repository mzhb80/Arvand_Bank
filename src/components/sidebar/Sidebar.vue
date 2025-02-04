<script setup lang="ts">
import SidebarItem, { type SidebarItemType } from '@/components/sidebar/SidebarItem.vue';

const sidebarItems: SidebarItemType[] = [
    { 
        text: 'داشبورد',
        link: '/',
        icon: '',
        showText: true,
        subItems: [
            { link: '/1', text: 'تست 1', },
            { link: '/2', text: 'تست 2', },
            { link: '/3', text: 'تست 3', },
            { link: '/4', text: 'تست 4', },
        ]
    },
]
</script>

<template>
    <div class="border-e-1 p-6 h-100vh">
        <SidebarItem v-for="item, index in sidebarItems" :key="index" :icon="item.icon" :link="item.link"
            :show-text="item.showText" :sub-items="item.subItems" :text="item.text" />
    </div>
</template>