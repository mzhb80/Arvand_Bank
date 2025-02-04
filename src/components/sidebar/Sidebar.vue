<script setup lang="ts">
import SidebarItem from '@/components/sidebar/SidebarItem.vue';
import { Static_Sidebar_Items } from '@/datasource/static/sidebar';
import { useBreakpoints, breakpointsTailwind } from '@vueuse/core';
import { computed } from 'vue';

const breakpoints = useBreakpoints(breakpointsTailwind)

const showText = computed(() => breakpoints.greaterOrEqual('md').value)
</script>

<template>
    <div class="border-e-1 p-6 h-100vh">
        <SidebarItem v-for="item, index in Static_Sidebar_Items" :key="index" :icon="item.icon" :link="item.link"
            :show-text="showText" :sub-items="item.subItems" :text="item.text" />
    </div>
</template>