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
    changeDayList(state, payload) {
      state.dayList = setDayList(payload, state.eventList);
    },
    changeDate(state, payload) {
      state.date = payload;
    },
    changeEventList(state, payload) {
      const { date, description } = payload;
      const [day, month, year] = date.split(".");
      const parseDate = `${year}-${month}-${day}`;

      state.eventList.push({
        date: parseDate,
        year: Number(year),
        month: Number(month),
        day: Number(day),
        name: description,
      });
    }
  },
  actions: {},
  modules: {},
});
