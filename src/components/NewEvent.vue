/* eslint-disable */
<template>
  <div>
    <h4>Добавьте событие</h4>
    <form action="">
      <CustomInput
        :value="null"
        :isValid="true"
        :onChange="null"
        :placeholder="Дата"
      />
      <CustomInput
        :value="null"
        :isValid="true"
        :onChange="null"
        :placeholder="Описание"
      />
      <button>Добавить</button>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CustomInput from "./CustomInput.vue";

export default defineComponent({
  name: "NewEvent",
  components: {
    CustomInput,
  },
});
</script>

<style scoped>
.input {
  width: 100%;
  border: 1px solid teal;
}
</style>
