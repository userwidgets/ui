import { r as registerInstance, i as createEvent, h } from './index-80daacae.js';
import { d as dist } from './index-24ec0bc5.js';

const styleCss = ".sc-smoothly-input-date-range-h{position:relative;display:block;width:fit-content}.sc-smoothly-input-date-range-h>nav.sc-smoothly-input-date-range{position:absolute;z-index:10;top:3.5em;background-color:rgb(var(--smoothly-default-shade));max-width:22em}.sc-smoothly-input-date-range-h>div.sc-smoothly-input-date-range{position:fixed;top:0px;left:0px;right:0px;bottom:0px;width:100vw;height:100vh;z-index:2}.sc-smoothly-input-date-range-h>nav.sc-smoothly-input-date-range>.arrow.sc-smoothly-input-date-range{position:absolute;z-index:9;transform:translate(10em, -0.55em) rotate(45deg);width:1em;height:1em;background-color:rgb(var(--smoothly-default-shade))}.sc-smoothly-input-date-range-h>section.sc-smoothly-input-date-range{display:flex;background-color:var(--background, transparent);border-radius:0.25rem;cursor:pointer}smoothly-input.sc-smoothly-input-date-range{border-radius:var(--border-radius, none);background-color:transparent;width:var(--input-width)}span.sc-smoothly-input-date-range{padding:0.5em 0.2em 0.5em 0.2em;align-self:center}";

const InputDateRange = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.valueChanged = createEvent(this, "valueChanged", 7);
    this.dateRangeSelected = createEvent(this, "dateRangeSelected", 7);
    this.showLabel = true;
  }
  onValue(next) {
    this.valueChanged.emit(next);
  }
  onStartChanged(event) {
    this.start = event.detail;
  }
  onEndChanged(event) {
    this.end = event.detail;
  }
  onDateRangeSet(event) {
    console.log("dateRangeSet", event.detail);
    this.open = false;
    event.stopPropagation();
    dist.DateRange.is(event.detail) && this.dateRangeSelected.emit(event.detail);
  }
  render() {
    var _a;
    return [
      h("section", { onClick: () => (this.open = !this.open) }, h("smoothly-input", { type: "date", value: this.start, showLabel: this.showLabel, onSmoothlyChanged: e => (this.start = e.detail.value) }, "from"), h("span", null, "\u2013"), h("smoothly-input", { type: "date", showLabel: this.showLabel, value: this.end, onSmoothlyChanged: e => (this.end = e.detail.value) }, "to")),
      this.open ? h("div", { onClick: () => (this.open = false) }) : [],
      this.open ? (h("nav", null, h("div", { class: "arrow" }), h("smoothly-calendar", { doubleInput: true, value: (_a = this.value) !== null && _a !== void 0 ? _a : dist.Date.now(), onValueChanged: event => {
          this.value = event.detail;
          event.stopPropagation();
        }, start: this.start, end: this.end, max: this.max, min: this.min }))) : ([]),
    ];
  }
  static get watchers() { return {
    "value": ["onValue"]
  }; }
};
InputDateRange.style = styleCss;

export { InputDateRange as smoothly_input_date_range };

//# sourceMappingURL=smoothly-input-date-range.entry.js.map