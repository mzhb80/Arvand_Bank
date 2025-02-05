<script setup lang="ts">
import { computed, ref } from 'vue';
import BaseInput, { type InputType } from './base/BaseInput.vue';
import Eye from '@/assets/icons/eye.svg'
import EyeSlash from '@/assets/icons/eye-slash.svg'

const props = defineProps<Omit<InputType, 'type' | 'appendIcon'>>()
const showPassword = ref(false)

const type = computed(() => showPassword.value ? 'text' : 'password')
const appendIcon = computed(() => showPassword.value ? EyeSlash : Eye)
</script>

<template>
    <BaseInput v-bind="props" :type="type" :append-icon="appendIcon" @append-icon-click="showPassword = !showPassword" />
</template>