<script setup lang="ts">
const props = defineProps<{
  msg: string;
}>();
</script>

<template>
  <div>{{ msg }}</div>
</template>

<style lang="scss" scoped></style>
