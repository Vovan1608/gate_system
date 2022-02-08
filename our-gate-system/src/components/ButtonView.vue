<template>
  <div class="button-container">
    <button>Toggle</button>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";

import Garage from "../../clases/Garage";
import Car from "../../clases/Car";

export default class ButtonView extends Vue {
  car = new Car();
  garage = new Garage(this.car);
}
</script>

<style scoped>
.button-container {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 50px;
}
</style>