<template>
  <div class="i-phone-device-container">
    <ButtonView />
    <div id="events-log"></div>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";

import ButtonView from "./ButtonView.vue";

export default class IPhoneDeviceView extends Vue {
  components: {
    ButtonView: ButtonView,
  }
}
</script>

<style scoped>
.i-phone-device-container {
  min-height: 150px;
}
</style>