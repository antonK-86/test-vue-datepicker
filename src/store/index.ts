/* eslint-disable */
import { IState } from "@/interfaces/IState";
import { createStore } from "vuex";
import setDayList from "../utils/setDayList";

export default createStore<IState>({
  state: {
    date: new Date().toLocaleDateString(),
    dayList: [],
    eventList: [
      { date: "2022-12-12", year: 2022, month: 12, day: 12, name: "Event 1" },
      { date: "2022-12-31", year: 2022, month: 12, day: 31, name: "Event 2" },
    ],
  },
  getters: {
    DATE(state) {
      return state.date;
    },
    DAYLIST(state) {
      return state.dayList;
    },
  },
  mutations: {
    changeDayList(state, date) {
      state.dayList = setDayList(date, state.eventList);
    },
    changeDate(state, newDate) {
      console.log('newDate', newDate)
      state.date = newDate;
    }
  },
  actions: {},
  modules: {},
});
