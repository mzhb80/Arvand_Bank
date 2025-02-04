<script setup lang="ts">
defineProps<{
  src: string,
}>()

</script>

<template>
  <!-- eslint-disable-next-line vue/no-v-html -->
  <i class=":uno: block shrink-0" v-html="src" />
</template>
