// получить название месяца
export default function getMonthAndYear(date: string) {
  const elemsDate = date.split(".");
  const month = Number(elemsDate[1]);
  const year = elemsDate[2];

  if (month < 1 || month > 12) return "";

  const list = [
    "Январь",
    "Февраль",
    "Март",
    "Апрель",
    "Май",
    "Июнь",
    "Июль",
    "Август",
    "Сентябрь",
    "Октябрь",
    "Ноябрь",
    "Декабрь",
  ];

  return `${list[month - 1]} ${year}`;
}
