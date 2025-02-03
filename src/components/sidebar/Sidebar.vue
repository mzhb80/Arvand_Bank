<script setup lang="ts">
import SidebarItem, { type SidebarItemType } from '@/components/sidebar/SidebarItem.vue';

const sidebarItems: SidebarItemType[] = [
    { text: 'داشبورد', link: '/', icon: '', showText: true },
]
</script>

<template>
    <div class="border-e-1">
        <SidebarItem v-for="item, index in sidebarItems" :key="index" :icon="item.icon" :link="item.link"
            :show-text="item.showText" :sub-items="item.subItems" :text="item.text" />
    </div>
</template>