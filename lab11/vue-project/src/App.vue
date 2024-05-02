<script setup>
import { ref } from 'vue';
import Clicker from './components/Clicker.vue';
import Button from './components/Button.vue';

function handleClick(index) {
  alert(`Clicker ${index}`);
}
</script>

<template>
  <Clicker
    v-for="i in 100"
    :key="i"
    :amount="i"
    @button-clicked="handleClick"
  ></Clicker>
  <Button :color="red">press me</Button>
</template>
