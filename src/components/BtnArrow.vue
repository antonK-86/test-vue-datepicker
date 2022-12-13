<template>
  <button class="btnarrow" v-on:click="onClick">
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "BtnArrow",
  props: ["onClick"],
});
</script>

<style scoped>
.btnarrow {
  padding: 4px;
  background-color: inherit;
  border: 1px solid #fff;
  cursor: pointer;
  transition: all 0.3s;
}

.btnarrow:active {
  border: 1px solid rgb(123, 129, 237);
  color: rgb(123, 129, 237);
}

.btnarrow img {
  display: block;
}

.btnarrow:hover {
  background-color: rgb(236 236 236);
}
</style>
