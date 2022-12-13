<template>
  <input
    class="input"
    type="text"
    v-bind:value="value"
    @change="onChange"
    :class="{ err: !isValid }"
    :placeholder="placeholder"
  />
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "CustomInput",
  props: ["value", "isValid", "placeholder", "onChange"],
});
</script>

<style scoped>
.input {
  width: 100%;
  height: 30px;
  padding: 0 10px;
  font-size: 20px;
  border: 2px solid darkgray;
  border-radius: 4px;
}

.input:focus-visible {
  outline: none;
}

.err {
  border: 2px solid red;
}
</style>
