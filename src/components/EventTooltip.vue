/* eslint-disable */
<template>
  <div
    class="tooltip-container"
    @mouseover="isShow = true"
    @mouseleave="isShow = false"
  >
    <div class="tooltip" :class="{ show: eventName.length > 0 && isShow }">
      <p>{{ date }}</p>
      <p>{{ eventName }}</p>
    </div>
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "EventTooltip",
  props: ["eventName", "date"],
  data() {
    return {
      isShow: false,
    };
  },
});
</script>

<style scoped>
.tooltip-container {
  position: relative;
}

.tooltip {
  position: absolute;
  top: -50px;
  left: 36px;
  width: max-content;
  padding: 0;
  background-color: #474747;
  color: azure;
  font-size: 14px;
  text-align: start;
  border-radius: 4px;
  z-index: 100;
  display: none;
}

.show {
  display: block;
  padding: 4px 8px;
}
</style>
