<script setup lang="ts">
import { computed, ref } from 'vue';
import BaseInput, { type InputType } from './base/BaseInput.vue';

const props = defineProps<Omit<InputType, 'type' | 'textCenter'>>()

</script>

<template>
    <BaseInput v-bind="props" type="number" text-center />
</template>