import { IDay } from "./IDay";
import { IEvent } from "./IEvent";

export interface IState {
  date: string;
  dayList: [] | Array<IDay>;
  eventList: Array<IEvent>;
}
