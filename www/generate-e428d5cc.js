import { d as dist } from './index-24ec0bc5.js';

function month(date) {
  const d = new Date(date);
  d.setDate(1);
  let day = -((d.getDay() + 6) % 7) + 1;
  const result = [];
  for (let row = 0; row < 6; row++) {
    const r = [];
    for (let column = 0; column < 7; column++) {
      const d = new Date(date);
      d.setDate(day++);
      r.push(dist.Date.create(d));
    }
    if (row < 5 || dist.Date.firstOfMonth(r[0]) == dist.Date.firstOfMonth(date))
      result.push(r);
  }
  return result;
}
function weekdays() {
  const day = new globalThis.Date();
  day.setDate(day.getDate() - day.getDay() + 1);
  const result = [];
  for (let i = 0; i < 7; i++) {
    result.push(day.toLocaleString(undefined, { weekday: "short" }));
    day.setDate(day.getDate() + 1);
  }
  return result;
}
function months(current) {
  const day = new globalThis.Date(current);
  const result = [];
  for (let i = 0; i < 12; i++) {
    day.setMonth(i, 28);
    const date = dist.Date.create(day);
    result.push({
      date,
      name: day.toLocaleString(undefined, { month: "long" }),
      selected: date.substr(0, 7) == current.substr(0, 7),
    });
  }
  return result;
}
function years(current) {
  const day = new globalThis.Date(current);
  const start = new Date().getFullYear() - 10;
  const end = new Date().getFullYear() + 10;
  const result = [];
  for (let i = start; i <= end; i++) {
    day.setFullYear(i);
    const date = dist.Date.create(day);
    result.push({
      date,
      name: day.toLocaleString(undefined, { year: "numeric" }),
      selected: date == current,
    });
  }
  return result;
}

export { months as a, month as m, weekdays as w, years as y };

//# sourceMappingURL=generate-e428d5cc.js.map