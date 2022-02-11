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

</style>