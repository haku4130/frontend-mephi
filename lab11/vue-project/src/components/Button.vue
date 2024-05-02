<script setup>
const props = defineProps({
  color: blue,
});
</script>

<template>
  <button style="color: color"><slot></slot></button>
</template>
