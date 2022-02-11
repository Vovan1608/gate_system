<template>
  <div class="container">
    <div class="vidgets-container">
      <div class="button-vidget">
        <div class="button-container">
          <button @click="toggle">Toggle</button>
        </div>
      </div>
      <div class="i-phone-vidget">
        <div class="button-container">
          <button @click="toggle">Toggle</button>
        </div>
        <div class="button-container">
          <label>
             Timer 
            <input type="text" name="events-log" v-model="timer"/>
        </label>
        </div>
        <div class="button-container">
          <label>
            Speed
            <input type="text" name="events-log" v-model="speed" />
        </label>
        </div> 
      </div>
    </div>
    <div class="drag-n-drop-vidget">
      <div class="car">
        <img src="./assets/f4f033ef-a64c-47dd-9e3c-a6678983900b.png" alt="car">
      </div>
      <div class="area">
        <span>
          Pre-parking line area
        </span>
      </div>
      <div class="area">
        <span>
          Parking gate area
        </span>
      </div>
      <div class="area">
        <span>
          After-parking line area
        </span>
      </div>
      <!-- <span
        @dragover="handleOnDragOver"
        @dragleave="onDragLeave"
        @drop="onDrop"
      >
        <slot />
      </span> -->
    </div>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";
// import { watch, ref } from 'vue';

import ButtonView from "./components/ButtonView.vue";
import InputView from "./components/InputView.vue";

import Garage from '../clases/Garage';
import Car from '../clases/Car';
import RemoteControl from '../clases/RemoteControl';
import User from '../clases/User';

const tom = new User('Tom');
const bob = new User('Bob');

export default class App extends Vue{
  private car = new Car();
  private garage = new Garage(this.car)
  
  private remoteControl = new RemoteControl(this.garage);

  private timer = 3;
  private speed = 5;

  create() {
    this.garage.attach(tom);
    this.garage.attach(bob);

    this.car.attach(this.garage);
  }
  
  private toggle() {
    this.garage.toggleGate();
  }

  // watch(() => speed, () => {
  //   console.log(
  //     "Watch props.selected function called with args:",
      
  //   );
  // });

  // @Watch("speed")
  // private setClosingSpeed() {
  //   this.remoteControl.setClosingSpeed(this.speed);
  // }

  // @watch("timer")
  // private setTimer() {
  //   this.remoteControl.setTimer(this.timer);
  // }
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

  .button-container {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 50px;
    width: 100px;
    margin: 10px;
    border: 1px solid #2c3e50;
  }

  input {
    margin: 5px 0;
    width: 20px;
  }

  .drag-n-drop-vidget {
    min-height: 250px;
    margin: 10px;
    border: 1px solid #2c3e50;

    .area {
      display: inline-block;
      margin: 10px;
      padding: 5px;
      min-width: 150px;
      height: 150px;
      border: 1px solid #2c3e50;
      line-height: 150px; 
    }

    .car {
      display: inline-block;
      position: relative;
      width: 80px;
      height: 80px;

      img {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        max-height: 100%;
        max-width: 100%;
      }
    }
  }
}
</style>
