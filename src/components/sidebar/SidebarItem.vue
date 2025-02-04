<script lang="ts">
const config = {
    default: {
        textColor: 'text-black',
        iconColor: 'text-gray-4',
        bgColor: '',
    },
    hover: {
        textColor: 'text-primary-500',
        iconColor: 'text-primary-500',
        bgColor: 'bg-primary-50',
    },
    active: {
        textColor: 'text-primary-50',
        iconColor: 'text-primary-50',
        bgColor: 'bg-primary-900',
    },
    'active-submenu': {
        textColor: 'text-primary-500',
        iconColor: 'text-primary-500',
        bgColor: 'bg-primary-50',
    },
}
</script>

<script setup lang="ts">
import { ref } from 'vue';
import BaseIcon from '../base/BaseIcon.vue';
import type { SidebarItemType } from '@/datasource/static/sidebar';

type SidebarState = 'default' | 'hover' | 'active' | 'active-submenu'

const props = defineProps<SidebarItemType & { showText: boolean }>()

const showSubItems = ref(false)

const state = ref<SidebarState>('default')

function handleClick() {
    if (props.subItems?.length) showSubItems.value = !showSubItems.value
 }

function handleMouseEnter() {
    if (state.value === 'default') state.value = 'hover'
}

function handleMouseLeave() {
    if (state.value === 'hover') state.value = 'default'
}
</script>

<template>
    <div>
        <button @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave" @click="handleClick"
            class="w-full text-start flex items-center px-3 py-10px rounded-2 transition-colors duration-500"
            :class="[config[state].bgColor, config[state].textColor]">
            <BaseIcon :src="props.icon" class="s-6" :class="config[state].iconColor" />
            <span v-if="showText" class="ms-2 text-body-4 grow min-w-0">{{ text }}</span>
            <BaseIcon v-if="showText" src="@/assets/icons/angle-left-small.svg" class="s-6 ms-2" :class="[config[state].iconColor, { 'rotate-90': showSubItems}]" />
        </button>
        <Transition name="fade">
            <ul class="mt-2 pt-4 ps-4 pe-3 grid grid-cols-1 gap-y-3 list-disc" v-if="subItems && showSubItems && showText">
                <li v-for="item in subItems" :key="item.link" class="text-center text-button-2 text-gray-1">
                    <router-link :to="item.link">
                        {{ item.text }}
                    </router-link>
                </li>
            </ul>
        </Transition>
    </div>
</template>