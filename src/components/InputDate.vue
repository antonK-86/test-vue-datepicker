<!-- eslint-disable @typescript-eslint/ban-ts-comment -->
<!-- eslint-disable @typescript-eslint/ban-ts-comment -->
<template>
  <div class="date" v-on:click="setIsShowCalendar">
    <!-- <input
      type="text"
      v-bind:value="DATE"
      @change="changeValue"
      :class="{ err: !isValid }"
    /> -->
    <CustomInput :value="DATE" :isValid="isValid" :onChange="changeValue" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapGetters } from "vuex";
import { mapMutations } from "vuex";
import checkValidDate from "../utils/checkValidDate";
import CustomInput from "./CustomInput.vue";

export default defineComponent({
  name: "InputDate",
  components: {
    CustomInput,
  },
  data() {
    return {
      isValid: true,
    };
  },
  computed: {
    ...mapGetters(["DATE"]), // указываем название геттера
  },
  props: ["setIsShowCalendar"],
  emits: ["change"],
  methods: {
    ...mapMutations(["changeDate"]),
    changeValue(e: Event) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      // валидация введенных данных
      const value = e?.target?.value;
      const [day, month, year] = value.split(".");
      const isValid = checkValidDate(day, month, year);

      this.isValid = isValid;
      if (isValid) {
        this.changeDate(value);
      }
      this.setIsShowCalendar(true);
    },
  },
});
</script>

<style scoped>
.date {
  padding: 16px 0;
}

/* .date input {
  width: 100%;
  height: 30px;
  padding: 0 10px;
  font-size: 20px;
  border: 2px solid darkgray;
  border-radius: 4px;
}

.date input:focus-visible {
  outline: none;
}

.date .err {
  border: 2px solid red;
} */
</style>
