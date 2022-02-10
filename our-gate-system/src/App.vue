<template>
  <div class="container">
  <!-- <IPhoneDeviceView /> -->
    <div class="vidgets-container">
      <div class="button-vidget">
        <ButtonView />
      </div>
      <div class="i-phone-vidget">
        <ButtonView />
        <InputView />
      </div>
    </div>
  </div>
</template>

<script>
import ButtonView from "./components/ButtonView.vue";
import IPhoneDeviceView from "./components/IPhoneDeviceView.vue";
import InputView from "./components/InputView.vue";

export default {
  components: {
    ButtonView,
    // IPhoneDeviceView,
    InputView,
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
    width: 90%;
    margin: 0 auto;
    border: 1px solid #2c3e50;

    .vidgets-container {
      display: flex;
      margin: 10px;
      padding: 10px;
      border: 1px solid #2c3e50;

      .button-vidget {
        width: 30%;
      }

      .i-phone-vidget {
        width: 70%;
      }
    }
  }
}
</style>
