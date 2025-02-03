<script setup lang="ts">
import { RouterView } from 'vue-router'
import Sidebar from './components/sidebar/Sidebar.vue';
</script>

<template>
  <div class="flex">
    <Sidebar />
    <div class="grow min-w-0">
      <RouterView />
    </div>
  </div>
</template>