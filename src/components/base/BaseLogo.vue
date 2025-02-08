<script setup lang="ts">
import BaseIcon from './BaseIcon.vue';

defineProps<{
    typography?: boolean
}>()
</script>

<template>
    <div class="flex items-center">
        <img src="@/assets/images/logo.png" width="47" height="47" class="h-full">
        <BaseIcon v-if="typography" src="@/assets/icons/typography.svg" class="min-w-72px h-full" />
    </div>
</template>