<script setup>
import { ref } from 'vue';

const emit = defineEmits(['button-clicked']);

const props = defineProps({
  amount: 0,
});

const count = ref(0);

function increment() {
  count.value += Number(props.amount);
  emit('button-clicked', count.value);
}
</script>

<template>
  <slot>
    <button @click="increment" class="fancy-btn">Count is: {{ count }}</button>
  </slot>
</template>

<style>
.fancy-btn {
  color: #fff;
  background: linear-gradient(315deg, #42d392 25%, #647eff);
  border: none;
  padding: 5px 10px;
  margin: 5px;
  border-radius: 8px;
  cursor: pointer;
}
</style>
