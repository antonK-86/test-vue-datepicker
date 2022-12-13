<!-- eslint-disable vue/valid-v-for -->
<!-- eslint-disable vue/require-v-for-key -->
<template>
  <div class="calendar">
    <div class="header">
      <BtnArrow :onClick="decrementMonth">
        <img alt="arrow left" src="@/assets/arrow-left.svg" />
      </BtnArrow>
      <span class="month">{{ renderMonthAndYear() }}</span>
      <BtnArrow :onClick="incrementMonth">
        <img alt="arrow right" src="@/assets/arrow-right.svg" />
      </BtnArrow>
    </div>
    <div class="body">
      <div class="days-week">
        <span class="day">Пн</span>
        <span class="day">Вт</span>
        <span class="day">Ср</span>
        <span class="day">Чт</span>
        <span class="day">Пн</span>
        <span class="day">Сб</span>
        <span class="day">Вс</span>
      </div>
      <div class="datepicker">
        <span
          v-for="day in DAYLIST"
          class="day"
          :class="{ event: day.eventName.length > 0 }"
        >
          <EventTooltip :eventName="day.eventName" :date="day.date">
            {{ day.value > 0 ? day.value : "" }}
          </EventTooltip>
        </span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapGetters } from "vuex";
import { mapMutations } from "vuex";
import EventTooltip from "../components/EventTooltip.vue";
import BtnArrow from "../components/BtnArrow.vue";
import getMonthAndYear from "../utils/getMonthAndYear";
import changeMonth from "../utils/changeMonth";

export default defineComponent({
  name: "CustomCalendar",
  components: {
    EventTooltip,
    BtnArrow,
  },
  props: {
    isShow: Boolean,
  },
  data() {
    return {
      date: "",
      isChangeMonth: false,
    };
  },
  methods: {
    ...mapMutations(["changeDayList"]),
    renderMonthAndYear() {
      return getMonthAndYear(this.date);
    },
    incrementMonth() {
      this.isChangeMonth = true;
      const newDate = changeMonth(this.date, "increment");
      this.changeDayList(newDate);
      this.date = newDate;
    },
    decrementMonth() {
      this.isChangeMonth = true;
      const newDate = changeMonth(this.date, "decrement");
      this.changeDayList(newDate);
      this.date = newDate;
    },
  },
  computed: {
    ...mapGetters(["DATE", "DAYLIST"]), // указываем название геттера
  },
  mounted() {
    // при монтированиии берем начальную дату из стора
    this.date = this.DATE;
    this.changeDayList(this.DATE);
  },
  updated() {
    if (this.date !== this.DATE && !this.isChangeMonth) {
      this.date = this.DATE;
      this.changeDayList(this.DATE);
    }
  },
});
</script>

<style scoped>
.calendar {
  padding: 8px 16px;
  box-shadow: rgb(48 48 48 / 20%) 0px 6px 20px;
  border-radius: 4px;
}

.header {
  display: flex;
  align-items: center;
  padding: 8px;
}

.month {
  width: 75%;
  font-weight: 600;
  font-size: 18px;
  color: rgb(72 72 72);
}

.days-week {
  display: flex;
}

.datepicker {
  display: flex;
  flex-wrap: wrap;
}

.day {
  width: calc(100% / 7 - 8px);
  text-align: center;
  padding: 4px;
  margin: 4px;
  cursor: pointer;
}

.event {
  background-color: silver;
  border-radius: 2px;
}
</style>
