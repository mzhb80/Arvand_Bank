<script lang="ts">
type ButtonState = 'default' | 'hover' | 'disabled'

const config = {
    primary: {
        fill: {
            default: {
                bgClass: '',
                borderClass: '',
                textClass: '',
            },
            hover: {
                bgClass: '',
                borderClass: '',
                textClass: '',
            },
            disabled: {
                bgClass: '',
                borderClass: '',
                textClass: '',
            },
        },
        outline: {
            default: {
                bgClass: '',
                borderClass: '',
                textClass: '',
            },
            hover: {
                bgClass: '',
                borderClass: '',
                textClass: '',
            },
            disabled: {
                bgClass: '',
                borderClass: '',
                textClass: '',
            },
        },
        text: {
            default: {
                bgClass: '',
                borderClass: '',
                textClass: '',
            },
            hover: {
                bgClass: '',
                borderClass: '',
                textClass: '',
            },
            disabled: {
                bgClass: '',
                borderClass: '',
                textClass: '',
            },
        },
    },
    neutral: {
        fill: {
            default: {
                bgClass: '',
                borderClass: '',
                textClass: '',
            },
            hover: {
                bgClass: '',
                borderClass: '',
                textClass: '',
            },
            disabled: {
                bgClass: '',
                borderClass: '',
                textClass: '',
            },
        },
        outline: {
            default: {
                bgClass: '',
                borderClass: '',
                textClass: '',
            },
            hover: {
                bgClass: '',
                borderClass: '',
                textClass: '',
            },
            disabled: {
                bgClass: '',
                borderClass: '',
                textClass: '',
            },
        },
        text: {
            default: {
                bgClass: '',
                borderClass: '',
                textClass: '',
            },
            hover: {
                bgClass: '',
                borderClass: '',
                textClass: '',
            },
            disabled: {
                bgClass: '',
                borderClass: '',
                textClass: '',
            },
        },
    },
}
</script>

<script setup lang="ts">
import { ref } from 'vue';
import BaseIcon from './BaseIcon.vue';

const props = withDefaults(defineProps<{
    styleType: 'fill' | 'outline' | 'text'
    color: 'primary' | 'neutral'
    size: '40' | '48' | '56'
    prependIcon?: string
    appendIcon?: string
}>(), {
    color: 'primary',
    size: '40',
    styleType: 'fill',
})

const state = ref<ButtonState>('default')
</script>

<template>
    <button
        v-bind="$attrs"
        class="flex items-center ps-10px pe-4 rounded-2 outline-none text-button-1"
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
    >
        <BaseIcon v-if="prependIcon" :src="prependIcon" class="s-5" />
        <span class="mx-2 flex items-center justify-center">
            <slot />
        </span>
        <BaseIcon v-if="appendIcon" :src="appendIcon" class="s-5" />
    </button>
</template>