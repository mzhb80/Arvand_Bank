<script setup lang="ts">
import SidebarItem from '@/components/sidebar/SidebarItem.vue';
import { Static_Sidebar_Items } from '@/datasource/static/sidebar';
import { useSidebarStore } from '@/stores/sidebar';
import { computed } from 'vue';

const { showText } = useSidebarStore()

const canShowText = computed(() => showText().value)


</script>

<template>
    <div class="border-e-1 p-6 h-100vh fixed bg-white">
        <SidebarItem v-for="item, index in Static_Sidebar_Items" :key="index" :icon="item.icon" :link="item.link"
            :show-text="canShowText" :sub-items="item.subItems" :text="item.text" />
    </div>
</template>