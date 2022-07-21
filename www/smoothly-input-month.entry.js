import { r as registerInstance, i as createEvent, h } from './index-80daacae.js';
import { d as dist } from './index-24ec0bc5.js';
import { y as years, a as months } from './generate-e428d5cc.js';

const styleCss = ".sc-smoothly-input-month-h{display:flex;justify-content:space-between;font-size:large}smoothly-icon.sc-smoothly-input-month{font-size:smaller}";

const MonthSelector = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.valueChanged = createEvent(this, "valueChanged", 7);
  }
  onValueChanged(next) {
    this.valueChanged.emit(next);
  }
  adjustMonth(delta) {
    var _a;
    const date = dist.Date.parse((_a = this.value) !== null && _a !== void 0 ? _a : dist.Date.now());
    date.setMonth(date.getMonth() + delta);
    this.value = dist.Date.create(date);
  }
  render() {
    var _a, _b;
    return [
      h("div", { onClick: () => this.adjustMonth(-1) }, h("smoothly-icon", { name: "chevron-back-outline", size: "small" })),
      h("smoothly-selector", { onSelected: (e) => (this.value = e.detail) }, years((_a = this.value) !== null && _a !== void 0 ? _a : dist.Date.now()).map(year => (h("smoothly-item", { value: year.date, selected: year.selected }, year.name)))),
      h("smoothly-selector", { onSelected: (e) => (this.value = e.detail) }, months((_b = this.value) !== null && _b !== void 0 ? _b : dist.Date.now()).map(month => (h("smoothly-item", { value: month.date, selected: month.selected }, month.name)))),
      h("div", { onClick: () => this.adjustMonth(1) }, h("smoothly-icon", { name: "chevron-forward-outline", size: "small" })),
    ];
  }
  static get watchers() { return {
    "value": ["onValueChanged"]
  }; }
};
MonthSelector.style = styleCss;

export { MonthSelector as smoothly_input_month };

//# sourceMappingURL=smoothly-input-month.entry.js.map