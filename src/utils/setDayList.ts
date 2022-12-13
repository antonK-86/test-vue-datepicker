// получить последнее число месяца
function getLastDayOfMonth(year: number, month: number) {
  const date = new Date(year, month, 0);
  return date.getDate();
}

// получить день недели начала месяца
function getDay(year: number, month: number) {
  const date = new Date(year, month - 1, 1);
  let day = date.getDay();
  if (day === 0) day = 7;
  return day;
}

// создать массив числами для календаря
export default function setDayList(
  date: string,
  // вынести в отдельный тип
  eventList: Array<{
    date: string;
    year: number;
    month: number;
    day: number;
    name: string;
  }>
): Array<{ value: number; eventName: string; date: string }> {
  const [day, month, year] = date.split(".");
  const lastDay = getLastDayOfMonth(Number(year), Number(month));
  const startDayOfWeek = getDay(Number(year), Number(month));

  const result = Array(startDayOfWeek - 1).fill({ value: 0, eventName: "" });

  let i = 1;

  while (i <= lastDay) {
    const list = eventList.filter((event) => event.month === Number(month));
    const eventDay = list.find((event) => event.day === i);
    result.push({
      value: i,
      eventName: eventDay ? eventDay.name : "",
      date: eventDay ? eventDay.date : "",
    });
    i++;
  }

  // for (let i = 1; i <= lastDay; i++) {
  //   const list = eventList.filter((event) => event.month === Number(month));
  //   const eventDay = list.find((event) => event.day === i);
  //   result.push({
  //     value: i,
  //     eventName: eventDay ? eventDay.name : "",
  //     date: eventDay ? eventDay.date : "",
  //   });
  // }

  return result;
}
