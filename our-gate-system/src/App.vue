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
            <input
              id="timer"
              type="text"
              name="events-log"
              data-test="timer"
              v-model="timer"
              @change="setTimer(timer)"
            />
          </label>
        </div>
        <div class="button-container">
          <label>
            Speed
            <input
              id="speed"
              type="text"
              data-test="speed"
              name="events-log"
              v-model="speed"
              @change="setSpeed(speed)"
            />
          </label>
        </div>
      </div>
    </div>
    <div id="draggable-elmnt" class="drag-n-drop-vidget">
      <div
        id="car"
        class="car"
        data-test="car"
        draggable="true"
        @dragstart="startDrag($event)"
        :style="{ top: carCoord.top, left: carCoord.left }"
      >
        <img
          src="./assets/f4f033ef-a64c-47dd-9e3c-a6678983900b.png"
          alt="car"
        />
      </div>
      <div
        v-for="{ id, title } in zones"
        :key="id"
        :id="id"
        data-test="area"
        class="area droppable"
        @drop="onDrop($event)"
        @dragenter.prevent
        @dragover.prevent
      >
        {{ title }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";
import { Watch } from "vue-property-decorator";

import Garage from "../clases/Garage";
import Car from "../clases/Car";
import RemoteControl from "../clases/RemoteControl";
import User from "../clases/User";

const tom = new User("Tom");
const bob = new User("Bob");

export default class App extends Vue {
  private car = new Car();
  private garage = new Garage(this.car);
  private remoteControl = new RemoteControl(this.garage);

  private timer = 10;
  private speed = 10;

  private zones = [
    { id: 1, title: "out-parking" },
    { id: 2, title: "parking" },
    { id: 3, title: "out-parking" },
  ];

  private carCoord = {
    top: "250px",
    left: "250px",
  };

  create(): void {
    this.garage.attach(tom);
    this.garage.attach(bob);

    this.car.attach(this.garage);
  }

  private toggle() {
    this.garage.toggleGate();
  }

  private startDrag(e: any) {
    e.dataTransfer.dropEffect = "move";
    e.dataTransfer.effectAllowed = "move";
  }

  private onDrop(e: any) {
    this.moveAt(e.pageY, e.pageX);

    if (e.target.id === "1" || e.target.id === "3") {
      this.car.carIsComing(false);
    } else {
      this.car.carIsComing(true);
    }
  }

  private moveAt(top: any, left: any) {
    this.carCoord.top = top - 40 + "px";
    this.carCoord.left = left - 40 + "px";
  }

  @Watch("speed")
  setSpeed(speed: any) {
    this.remoteControl.setClosingSpeed(speed);
  }

  @Watch("timer")
  setTimer(timer: any) {
    this.remoteControl.setTimer(timer);
  }
}
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
      margin: 10px;
      padding: 5px;
      min-width: 150px;
      height: 100px;
      border: 1px solid #2c3e50;
      line-height: 100px;
    }

    .car {
      display: inline-block;
      position: absolute;
      top: 250px;
      left: 300px;
      width: 80px;
      height: 80px;
      z-index: 9;
      text-align: center;
      cursor: move;

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