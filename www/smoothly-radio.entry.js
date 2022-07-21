import { r as registerInstance, i as createEvent, h } from './index-80daacae.js';

const styleCss = ".sc-smoothly-radio-h{display:block;position:relative}[hidden].sc-smoothly-radio-h{display:none}label.sc-smoothly-radio{display:block;width:calc(100% - 2 * 0.4em);padding:0.2em 0.4em 0.2em 0.4em}input[type=radio].sc-smoothly-radio{position:absolute;left:0;top:0;width:calc(100%);height:100%;margin:0;appearance:none;-webkit-appearance:none}input[type=radio].sc-smoothly-radio~label.sc-smoothly-radio{border:1px solid rgb(var(--smoothly-default-color));color:rgba(var(--smoothly-default-contrast), 0.5);background:rgb(var(--smoothly-default-color))}input[type=radio].sc-smoothly-radio:checked~label.sc-smoothly-radio{background-color:rgb(var(--smoothly-default-shade));color:rgb(var(--smoothly-default-contrast))}";

const SmoothlyRadio = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.smoothlySelected = createEvent(this, "smoothlySelected", 7);
  }
  async onInput(e) {
    if (e.target && e.target.value && (this.checked = e.target.checked))
      this.smoothlySelected.emit({ name: this.name, value: this.value });
    return true;
  }
  render() {
    return [
      h("input", { type: "radio", name: this.name, id: this.value, tabindex: this.tabIndex, checked: this.checked, value: this.value, onChange: e => this.onInput(e) }),
      h("label", { htmlFor: this.value }, h("slot", null)),
    ];
  }
};
SmoothlyRadio.style = styleCss;

export { SmoothlyRadio as smoothly_radio };

//# sourceMappingURL=smoothly-radio.entry.js.map