import { r as registerInstance, i as createEvent, h } from './index-80daacae.js';
import { d as dist } from './index-24ec0bc5.js';

const styleCss = ".sc-smoothly-input-date-h{position:relative}nav.sc-smoothly-input-date{position:absolute;z-index:10;top:3.5em;background-color:rgb(var(--smoothly-default-shade));max-width:22em}.sc-smoothly-input-date-h>div.sc-smoothly-input-date{position:fixed;top:0px;left:0px;right:0px;bottom:0px;width:100vw;height:100vh;z-index:2}.sc-smoothly-input-date-h>nav.sc-smoothly-input-date>.arrow.sc-smoothly-input-date{position:absolute;z-index:9;transform:translate(2em, -.55em) rotate(45deg);width:1em;height:1em;background-color:rgb(var(--smoothly-default-shade))}";

const InputDate = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.valueChanged = createEvent(this, "valueChanged", 7);
  }
  onStart(next) {
    this.valueChanged.emit(next);
  }
  dateSetHandler(e) {
    this.open = false;
    e.stopPropagation();
  }
  render() {
    var _a;
    return [
      h("smoothly-input", { onClick: () => (this.open = !this.open), disabled: this.disabled, type: "date", value: this.value, onSmoothlyChanged: e => (this.value = e.detail.value) }, h("slot", null)),
      this.open && !this.disabled
        ? [
          h("div", { onClick: () => (this.open = false) }),
          h("nav", null, h("div", { class: "arrow" }), h("smoothly-calendar", { doubleInput: false, value: (_a = this.value) !== null && _a !== void 0 ? _a : dist.Date.now(), onValueChanged: event => {
              this.value = event.detail;
              event.stopPropagation();
            }, max: this.max, min: this.min })),
        ]
        : [],
    ];
  }
  static get watchers() { return {
    "value": ["onStart"]
  }; }
};
InputDate.style = styleCss;

export { InputDate as smoothly_input_date };

//# sourceMappingURL=smoothly-input-date.entry.js.map