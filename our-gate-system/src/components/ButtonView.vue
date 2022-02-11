<template>
  <div class="button-container">
    <button @click="$emit('click')">Toggle</button>
  </div>
</template>

<script lang="ts">
export default {
  name: 'ButtonView',
}
</script>

<style scoped>
.button-container {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 50px;
  width: 100px;
  margin: 10px;
  border: 1px solid #2c3e50;
}
</style>