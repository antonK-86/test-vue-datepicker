<template>
  <div class="wrapper">
    <InputDate :setIsShowCalendar="setIsShowCalendar" />
    <CustomCalendar v-if="isShowCalendar" />
    <NewEvent />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import InputDate from "./components/InputDate.vue";
import CustomCalendar from "./components/CustomCalendar.vue";
import NewEvent from "./components/NewEvent.vue";

export default defineComponent({
  name: "App",
  components: {
    InputDate,
    CustomCalendar,
    NewEvent,
  },
  data() {
    return {
      isShowCalendar: false,
    };
  },
  methods: {
    setIsShowCalendar() {
      console.log("this.isShowCalendar", this.isShowCalendar);
      this.isShowCalendar = !this.isShowCalendar;
    },
  },
});
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.wrapper {
  width: 350px;
  margin: 0 auto;
  padding: 20px;
}
</style>
