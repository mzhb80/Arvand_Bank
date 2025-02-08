<script setup lang="ts">
import { RouterView, useRouter } from 'vue-router'
import Sidebar from './components/sidebar/Sidebar.vue';
import { computed, watchEffect } from 'vue';
import { useSidebarStore } from './stores/sidebar';

const { showText } = useSidebarStore()
const router = useRouter()

const canShowText = computed(() => showText().value)

const startOffsetClass = computed(() => {
  if (router.currentRoute.value.meta?.noSidebar) return 'start-0'
  if (canShowText.value) return 'start-250px'
  return 'start-100px'
})

const showSidebar = computed(() => !router.currentRoute.value.meta.noSidebar)
</script>

<template>
  <div class="flex">
    <Sidebar v-if="showSidebar" class="shrink-0" />
    <div class="grow min-w-0 absolute inset-0" :class="startOffsetClass">
      <RouterView />
    </div>
  </div>
</template>