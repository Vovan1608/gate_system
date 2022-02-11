<template>
  <div class="container">
    <div class="vidgets-container">
      <div class="button-vidget">
        <ButtonView @click="toggle"/>
      </div>
      <div class="i-phone-vidget">
        <ButtonView @click="toggle"/>
        <InputView />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import ButtonView from "./components/ButtonView.vue";
import InputView from "./components/InputView.vue";

import Garage from "../clases/Garage.ts";
import Car from "../clases/Car.ts";

export default {
  components: {
    ButtonView,
    InputView
  }, 
  data() {
    return {
      car: new Car(),
      garage: new Garage(this.car)
    }
  },
  methods: {
    toggle() {
      this.garage.toggleGate();
    }
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
    width: 90%;
    margin: 0 auto;
    border: 1px solid #2c3e50;

    .vidgets-container {
      display: flex;
      margin: 10px;
      padding: 10px;
      border: 1px solid #2c3e50;

      .button-vidget,
      .i-phone-vidget {
        margin: 10px;
        border: 1px solid #2c3e50;
      }

      .button-vidget {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 30%;
      }

      .i-phone-vidget {
        width: 70%;
      }
    }
  }
}
</style>
