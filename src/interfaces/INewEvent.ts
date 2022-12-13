export interface INewEvent {
  date: string;
  description: string;
  isValidDate: boolean;
  onClick: (event: Event) => void;
  onChangeDate: (event: Event) => void;
  onChangeDesc: (event: Event) => void;
  computedCondition: () => boolean;
  changeEventList: (args: { date: string; description: string }) => void;
}
