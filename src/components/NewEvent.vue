/* eslint-disable */
<template>
  <div class="newEvent">
    <h4>Добавьте событие</h4>
    <form class="form">
      <CustomInput
        :value="date"
        :isValid="isValidDate"
        :onChange="onChangeDate"
        placeholder="Дата"
      />
      <CustomInput
        :value="description"
        :isValid="true"
        :onChange="onChangeDesc"
        placeholder="Описание"
      />
      <button
        class="btn"
        :class="{ disabled: computedCondition }"
        @click="onClick"
        :disabled="computedCondition"
      >
        Добавить
      </button>
    </form>
  </div>
</template>

<script lang="ts">
import checkValidDate from "@/utils/checkValidDate";
import { defineComponent } from "vue";
import CustomInput from "./CustomInput.vue";
import { mapMutations } from "vuex";
import { INewEvent } from "@/interfaces/INewEvent";

export default defineComponent<INewEvent>({
  name: "NewEvent",
  components: {
    CustomInput,
  },
  data() {
    return {
      date: "",
      description: "",
      isValidDate: true,
    };
  },
  computed: {
    computedCondition() {
      return !this.date.length || !this.description.length || !this.isValidDate;
    },
  },
  methods: {
    ...mapMutations(["changeEventList"]),
    onClick(e: Event) {
      e.preventDefault();
      const payload = {
        date: this.date,
        description: this.description,
      };
      this.changeEventList(payload);
      this.date = "";
      this.description = "";
    },
    onChangeDate(event: Event) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      // валидация введенных данных
      const value = event?.target?.value;
      const [day, month, year] = value.split(".");
      const isValid = checkValidDate(day, month, year);

      this.isValidDate = isValid;
      if (isValid) {
        this.date = value;
      }
    },
    onChangeDesc(event: Event) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      const value = event?.target?.value;
      this.description = value;
    },
  },
});
</script>

<style scoped>
.newEvent {
  height: 140px;
  display: flex;
  flex-direction: column;
}

h4 {
  margin-bottom: 20px;
}

.form {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
}

.btn {
  padding: 8px;
  background-color: inherit;
  border: 1px solid #fff;
  border-radius: 8px;
  background-color: rgb(226, 226, 226);
  font-size: 16px;
  transition: all 0.3s;
}

.btn:active {
  border: 1px solid rgb(123, 129, 237);
  color: rgb(123, 129, 237);
}

.disabled:active {
  border: 1px solid #fff;
  color: inherit;
}

.btn:hover {
  background-color: rgb(236 236 236);
}
</style>
