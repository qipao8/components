<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ msg: string }>()

const count = ref(0)
</script>

<template>
  <div class="container">

  </div>
</template>

<style scoped>
.container {
    border:1px solid red;
    height:100%;
    box-sizing: border-box;
}
</style>
