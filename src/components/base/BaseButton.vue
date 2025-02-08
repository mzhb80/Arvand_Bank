<script lang="ts">
type ButtonState = 'default' | 'hover' | 'disabled'

const config = {
    primary: {
        fill: {
            default: {
                bgClass: 'bg-primary-500',
                borderClass: '',
                textClass: 'text-white',
            },
            hover: {
                bgClass: 'bg-primary-600',
                borderClass: '',
                textClass: 'text-white',
            },
            disabled: {
                bgClass: 'bg-gray-9',
                borderClass: '',
                textClass: 'text-gray-4',
            },
        },
        outline: {
            default: {
                bgClass: '',
                borderClass: 'border-primary-500',
                textClass: 'text-primary-500',
            },
            hover: {
                bgClass: '',
                borderClass: 'border-primary-600',
                textClass: 'text-primary-600',
            },
            disabled: {
                bgClass: '',
                borderClass: 'border-gray-4',
                textClass: 'text-gray-4',
            },
        },
        text: {
            default: {
                bgClass: '',
                borderClass: '',
                textClass: 'text-primary-500',
            },
            hover: {
                bgClass: '',
                borderClass: '',
                textClass: 'text-primary-600',
            },
            disabled: {
                bgClass: '',
                borderClass: '',
                textClass: 'text-gray-4',
            },
        },
    },
    neutral: {
        fill: {
            default: {
                bgClass: 'bg-black',
                borderClass: '',
                textClass: 'text-white',
            },
            hover: {
                bgClass: 'bg-gray-1',
                borderClass: '',
                textClass: 'text-white',
            },
            disabled: {
                bgClass: 'bg-gray-3',
                borderClass: '',
                textClass: 'text-white',
            },
        },
        outline: {
            default: {
                bgClass: '',
                borderClass: 'border-gray-1',
                textClass: 'text-gray-1',
            },
            hover: {
                bgClass: '',
                borderClass: 'border-gray-2',
                textClass: 'text-gray-2',
            },
            disabled: {
                bgClass: '',
                borderClass: 'border-gray-3',
                textClass: 'border-gray-3',
            },
        },
        text: {
            default: {
                bgClass: '',
                borderClass: '',
                textClass: 'text-gray-1',
            },
            hover: {
                bgClass: '',
                borderClass: '',
                textClass: 'text-gray-2',
            },
            disabled: {
                bgClass: '',
                borderClass: '',
                textClass: 'text-gray-3',
            },
        },
    },
}
</script>

<script setup lang="ts">
import { ref } from 'vue';
import BaseIcon from './BaseIcon.vue';

const props = withDefaults(defineProps<{
    styleType?: 'fill' | 'outline' | 'text'
    color?: 'primary' | 'neutral'
    size?: '40' | '48' | '56'
    prependIcon?: string
    appendIcon?: string
    disabled?: boolean
}>(), {
    color: 'primary',
    size: '40',
    styleType: 'fill',
})

const state = ref<ButtonState>(props.disabled ? 'disabled' : 'default')

function handleMouseEnter() {
    if (props.disabled) return
    state.value = 'hover'
}

function handleMouseLeave() {
    if (props.disabled) return
    state.value = 'default'
}
</script>

<template>
    <button
        v-bind="$attrs"
        class="flex items-center ps-10px pe-4 rounded-2 outline-none text-button-1 transition-colors"
        :class="[
            config[color][styleType][state].bgClass,
            config[color][styleType][state].borderClass,
            config[color][styleType][state].textClass,
            {
                'h-10': size === '40',
                'h-48px': size === '48',
                'h-56px': size === '56',
            }
        ]"
        @mouseenter="handleMouseEnter"
        @mouseleave="handleMouseLeave"
    >
        <BaseIcon v-if="prependIcon" :src="prependIcon" class="s-5" />
        <span class="mx-2 flex items-center justify-center">
            <slot />
        </span>
        <BaseIcon v-if="appendIcon" :src="appendIcon" class="s-5" />
    </button>
</template>