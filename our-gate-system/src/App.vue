<template>
  <div class="container">
    <ButtonView />
    <IPhoneDeviceView />
  </div>
</template>

<script>
import ButtonView from "./components/ButtonView.vue";
import IPhoneDeviceView from "./components/IPhoneDeviceView.vue";

export default {
  components: {
    ButtonView,
    IPhoneDeviceView
  }
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
    margin: 0 auto;
    border: 1px solid #2c3e50;
  }
}
</style>
