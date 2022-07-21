import { r as registerInstance, i as createEvent, h } from './index-80daacae.js';

const styleCss = ".sc-smoothly-select-h{display:block}[hidden].sc-smoothly-select-h{display:none}select.sc-smoothly-select{min-width:1.5em;padding-top:0.5em;border:none;-webkit-appearance:none;background-color:rgb(var(--smoothly-color));padding:0.3em}select.sc-smoothly-select>option.sc-smoothly-select{background-color:inherit}select.sc-smoothly-select:focus{outline:none}";

const SmoothlySelect = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.selectionChanged = createEvent(this, "selectionChanged", 7);
  }
  optionSelected() {
    if (this.selectElement)
      this.selectionChanged.emit({ identifier: this.identifier, value: (this.value = this.selectElement.value) });
  }
  componentDidLoad() {
    var _a;
    if (this.selectElement)
      this.value = (_a = this.selectElement) === null || _a === void 0 ? void 0 : _a.value;
  }
  render() {
    return [
      h("select", { ref: e => (this.selectElement = e), id: this.identifier, onChange: () => this.optionSelected(), style: { background: this.background } }, h("slot", null)),
    ];
  }
};
SmoothlySelect.style = styleCss;

export { SmoothlySelect as smoothly_select };

//# sourceMappingURL=smoothly-select.entry.js.map