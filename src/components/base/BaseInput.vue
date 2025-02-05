<script lang="ts">
const config = {
    default: {
        borderClass: 'border-gray-7',
        iconClass: 'text-gray-6',
        bgClass: '',
        placeholderClass: 'text-gray-6',
    },
    disabled: {
        borderClass: 'border-gray-9',
        iconClass: 'text-gray-4',
        bgClass: 'bg-gray-9',
        placeholderClass: 'text-gray-4',
    },
    selected: {
        borderClass: 'border-primary-600',
        iconClass: 'text-primary-600',
        bgClass: '',
        placeholderClass: 'text-gray-6',
    },
    error: {
        borderClass: 'border-error-1',
        iconClass: 'text-primary-600',
        bgClass: '',
        placeholderClass: 'text-gray-6',
    },
}
</script>

<script setup lang="ts">
import { computed, ref, watchEffect } from 'vue';
import BaseIcon from './BaseIcon.vue';

type InputState = 'default' | 'disabled' | 'selected' | 'error'

const props = defineProps<{
    id: string
    type: HTMLInputElement['type']
    placeholder?: string
    size?: 40 | 48
    prependIcon?: string
    textCenter?: boolean
    appendIcon?: string
}>()

const modelValue = defineModel<string>({ required: true })

const inputSize = computed(() => props.size ?? 40)
const canDisplayPlaceholder = computed(() => props.placeholder && !modelValue.value.length)


const state = ref<InputState>('default')
</script>

<template>
    <label 
        :for="id"
        class="flex items-center ps-4 rounded-2 border-1 relative"
        :class="[inputSize === 40 ? 'h-40px' : 'h-48px', config[state].bgClass, config[state].borderClass]"
    >
        <BaseIcon v-if="prependIcon" :src="prependIcon" class="s-6" :class="config[state].iconClass" />
        <span v-if="canDisplayPlaceholder" class="text-caption-1 absolute" :class="[config[state].placeholderClass, prependIcon ? 'start-11' : 'start-4']">{{ placeholder }}</span>
        <input 
            v-model="modelValue"
            :id="id"
            @focus="state = 'selected'"
            @blur="state = 'default'"
            :type="type"
            class="border-none outline-none text-black text-caption-1 grow"
            :class="{'text-center': textCenter}"
        >
        <BaseIcon v-if="appendIcon" :src="appendIcon" class="s-6 me-4" :class="config[state].iconClass" />
    </label>
</template>