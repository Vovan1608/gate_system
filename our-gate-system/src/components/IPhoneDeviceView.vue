<template>
  <div class="i-phone-device-container">
    <ButtonView />
    <InputView />
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";

import ButtonView from "./ButtonView.vue";
import InputView from "./InputView.vue";

export default class IPhoneDeviceView extends Vue {
  components: {
    ButtonView: ButtonView,
    InputView: InputView
  }
}
</script>

<style lang="scss">
.i-phone-device-container {
  min-height: 150px;
}
</style>
