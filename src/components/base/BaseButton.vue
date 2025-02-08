<script lang="ts">
type ButtonState = 'default' | 'hover' | 'disabled'

const config = {
    primary: {
        fill: {
            bgClass: 'bg-primary-500 hover:bg-primary-600 disabled:bg-gray-9',
            borderClass: '',
            textClass: 'text-white disabled:text-gray-4',
        },
        outline: {
            bgClass: '',
            borderClass: 'border-primary-500 hover:border-primary-600 disabled:border-gray-4',
            textClass: 'text-primary-500 hover:text-primary-600 disabled:text-gray-4',

        },
        text: {
            bgClass: '',
            borderClass: 'border-transparent',
            textClass: 'text-primary-500 hover:text-primary-600 disabled:text-gray-4',
        },
    },
    neutral: {
        fill: {
            bgClass: 'bg-black hover:bg-gray-1 disabled:bg-gray-3',
            borderClass: '',
            textClass: 'text-white',

        },
        outline: {
            bgClass: '',
            borderClass: 'border-gray-1 hover:border-gray-2 disabled:border-gray-3',
            textClass: 'text-gray-1 hover:text-gray-2 disabled:text-gray-3',
        },
        text: {
            bgClass: '',
            borderClass: 'border-transparent',
            textClass: 'text-gray-1 hover:text-gray-2 disabled:text-gray-3',
        },
    },
}
</script>

<script setup lang="ts">
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
</script>

<template>
    <button v-bind="$attrs"
        class="flex items-center px-10px rounded-2 outline-none text-button-1 transition-colors border-1" :class="[
            config[color][styleType].bgClass,
            config[color][styleType].borderClass,
            config[color][styleType].textClass,
            {
                'h-10': size === '40',
                'h-48px': size === '48',
                'h-56px': size === '56',
                'pointer-events-none': disabled,
            }
        ]"
        :disabled="disabled"
    >
        <BaseIcon v-if="prependIcon" :src="prependIcon" class="s-5" />
        <span class="mx-2 flex items-center justify-center">
            <slot />
        </span>
        <BaseIcon v-if="appendIcon" :src="appendIcon" class="s-5" />
    </button>
</template>