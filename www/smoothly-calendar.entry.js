import { r as registerInstance, i as createEvent, h, j as getElement } from './index-80daacae.js';
import { d as dist } from './index-24ec0bc5.js';
import { w as weekdays, m as month } from './generate-e428d5cc.js';

const styleCss = ".sc-smoothly-calendar-h{display:block;--other-month-opacity:0.5}.sc-smoothly-calendar-h>smoothly-input-month.sc-smoothly-calendar{width:calc(100% - 1em);padding:0.5em 0.5em 0 0.5em}th.sc-smoothly-calendar,td.sc-smoothly-calendar{text-align:center;padding:0.5em;min-width:2em;background-color:rgb(var(--smoothly-default-shade));cursor:pointer;user-select:none}td.currentMonth.sc-smoothly-calendar{color:rgb(var(--smoothly-default-contrast))}td.sc-smoothly-calendar:not(.currentMonth){color:rgba(var(--smoothly-default-contrast), var(--other-month-opacity))}td.sc-smoothly-calendar:nth-child(6):not(.currentMonth).selected,td.sc-smoothly-calendar:nth-child(6):not(.currentMonth).dateRange,td.sc-smoothly-calendar:nth-child(7):not(.currentMonth).selected,td.sc-smoothly-calendar:nth-child(7):not(.currentMonth).dateRange{color:rgba(var(--smoothly-default-contrast))}td.sc-smoothly-calendar:nth-child(6),td.sc-smoothly-calendar:nth-child(7){color:rgb(var(--smoothly-danger-tint))}td.sc-smoothly-calendar:nth-child(6):not(.currentMonth),td.sc-smoothly-calendar:nth-child(7):not(.currentMonth){color:rgba(var(--smoothly-danger-tint), var(--other-month-opacity))}td.sc-smoothly-calendar:not(.selected,.disable).sc-smoothly-calendar:hover{color:rgb(var(--smoothly-primary-contrast));background:rgb(var(--smoothly-primary-tint))}td.selected.sc-smoothly-calendar{color:rgb(var(--smoothly-primary-contrast));background:rgb(var(--smoothly-primary-color))}td.sc-smoothly-calendar:not(.selected,.dateRange).sc-smoothly-calendar:not(:hover).today{background:rgb(var(--smoothly-dark-tint));color:rgb(var(--smoothly-dark-contrast))}td.dateRange.sc-smoothly-calendar{color:rgb(var(--smoothly-primary-contrast));background:rgb(var(--smoothly-primary-tint))}td.disable.sc-smoothly-calendar{cursor:not-allowed;background-color:rgb(var(--smoothly-default-tint), 0.5);color:rgb(var(--smoothly-default-contrast), 0.5)}";

const Calendar = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.valueChanged = createEvent(this, "valueChanged", 7);
    this.startChanged = createEvent(this, "startChanged", 7);
    this.endChanged = createEvent(this, "endChanged", 7);
    this.dateSet = createEvent(this, "dateSet", 7);
    this.dateRangeSet = createEvent(this, "dateRangeSet", 7);
    this.value = dist.Date.now();
    this.clickCounter = 0;
  }
  onStart(next) {
    this.startChanged.emit(next);
  }
  onEnd(next) {
    this.endChanged.emit(next);
  }
  onClick(date) {
    this.valueChanged.emit((this.value = date));
    this.clickCounter += 1;
    if (this.doubleInput) {
      if (this.clickCounter % 2 == 1)
        this.start = this.end = this.frozenDate = date;
      else {
        if (this.start && date > this.start)
          this.end = date;
        else
          this.start = date;
      }
    }
    !this.doubleInput && this.dateSet.emit(this.value);
    this.doubleInput &&
      this.clickCounter % 2 == 0 &&
      this.start &&
      this.end &&
      this.dateRangeSet.emit({ start: this.start, end: this.end });
  }
  onHover(date) {
    if (this.doubleInput && this.clickCounter % 2 == 1) {
      if (date < this.frozenDate) {
        this.start = date;
        this.end = this.frozenDate;
      }
      else {
        this.start = this.frozenDate;
        this.end = date;
      }
    }
  }
  render() {
    var _a, _b;
    return [
      h("smoothly-input-month", { value: (_a = this.month) !== null && _a !== void 0 ? _a : this.value, onValueChanged: event => {
          this.month = event.detail;
          event.stopPropagation();
        } }),
      h("table", null, h("thead", null, h("tr", null, weekdays().map(day => (h("th", null, day))))), month((_b = this.month) !== null && _b !== void 0 ? _b : this.value).map(week => (h("tr", null, week.map(date => {
        var _a, _b, _c;
        return (h("td", { tabindex: 1, onMouseOver: () => {
            !this.doubleInput && (this.min || this.max) && (date < this.min || date > this.max)
              ? undefined
              : this.onHover(date);
          }, onClick: (this.min || this.max) && (date < this.min || date > this.max) ? undefined : () => this.onClick(date), class: (date == this.value ? ["selected"] : [])
            .concat(...(date == dist.Date.now() ? ["today"] : []), dist.Date.firstOfMonth((_a = this.month) !== null && _a !== void 0 ? _a : this.value) == dist.Date.firstOfMonth(date) ? ["currentMonth"] : [], this.doubleInput
            ? this.start == date || this.end == date
              ? ["selected"]
              : date >= ((_b = this.start) !== null && _b !== void 0 ? _b : "") && date <= ((_c = this.end) !== null && _c !== void 0 ? _c : "")
                ? ["dateRange"]
                : []
            : "")
            .concat(...(this.min || this.max ? (date < this.min || date > this.max ? ["disable"] : []) : ""))
            .join(" ") }, date.substring(8, 10)));
      }))))),
    ];
  }
  get element() { return getElement(this); }
  static get watchers() { return {
    "start": ["onStart"],
    "end": ["onEnd"]
  }; }
};
Calendar.style = styleCss;

export { Calendar as smoothly_calendar };

//# sourceMappingURL=smoothly-calendar.entry.js.map