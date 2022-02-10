<template>
  <div class="button-container">
    <button @click="toggle">Toggle</button>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";

import Garage from "../../clases/Garage";
import Car from "../../clases/Car";

export default class ButtonView extends Vue {
  public  car = new Car();
  public  garage = new Garage(this.car);

  public toggle(): void {
    this.garage.toggleGate();
  }
}
</script>

<style scoped>
.button-container {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 50px;
  border: 1px solid #2c3e50;
}
</style>