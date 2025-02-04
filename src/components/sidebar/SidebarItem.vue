<script lang="ts">
export type SidebarItemType = {
    text: string
    icon: string
    link: string
    showText: boolean
    subItems?: {
        text: string
        link: string
    }[]
}
</script>

<script setup lang="ts">
import { ref } from 'vue';
import BaseIcon from '../base/BaseIcon.vue';

type SidebarState = 'default' | 'hover' | 'active' | 'active-submenu'

const props = defineProps<SidebarItemType>()

const state = ref<SidebarState>('default')

function handleClick() {}
</script>

<template>
    <button @click="handleClick" class="flex items-center px-3 py-10px">
        <span class="ms-2 text-body-4">{{ text }}</span>
        <BaseIcon src="@/assets/icons/angle-left-small.svg" class="s-6 ms-2" />
    </button>
</template>