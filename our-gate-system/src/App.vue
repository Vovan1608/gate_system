<template>
  <div class="container">
    <ButtonView />
  </div>
</template>

<script>
import ButtonView from "./components/ButtonView.vue";
export default {
  components: {
    ButtonView,
  },
};
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  .container {
    width: 50%;
    border: 1px solid #2c3e50;
  }
}
</style>
