export default function changeMonth(date: string, mode: string) {
  const modDate = new Date(date.replace(/(\d+).(\d+).(\d+)/, "$3/$2/$1"));

  let m = modDate.getMonth();
  const y = modDate.getFullYear();
  const d = modDate.getDate();

  if (mode === "increment") {
    m++;
  }
  if (mode === "decrement") {
    m--;
  }

  return new Date(y, m, d).toLocaleDateString();
}
