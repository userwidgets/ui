import { r as registerInstance, i as createEvent, h } from './index-80daacae.js';

const styleCss = ".sc-smoothly-submit-h{display:block;border-width:1px;border-style:solid;border-radius:3px}[hidden].sc-smoothly-submit-h{display:none}[disabled].sc-smoothly-submit-h{opacity:0.5}button.sc-smoothly-submit{padding:0.2em 0.3em;font-size:110%;font-weight:400}[processing].sc-smoothly-submit-h{border-color:rgb(var(--smoothly-light-color))}[processing].sc-smoothly-submit-h>button.sc-smoothly-submit{color:rgb(var(--smoothly-light-contrast));background:rgb(var(--smoothly-light-color))}.sc-smoothly-submit-h:not([processing]):not([disabled]):hover,.sc-smoothly-submit-h:not([processing]):not([disabled]):focus,.sc-smoothly-submit-h:not([processing]):not([disabled]):active{border-color:rgb(var(--smoothly-submit-border))}[expand=fill].sc-smoothly-submit-h>button.sc-smoothly-submit,[expand=block].sc-smoothly-submit-h>button.sc-smoothly-submit{width:100%}[expand=fill].sc-smoothly-submit-h{border-left:none;border-right:none}";

const SmoothlySubmit = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.submitEvent = createEvent(this, "submit", 7);
    this.disabled = false;
  }
  get form() {
    return (this.button && this.button.form) || undefined;
  }
  async handleSubmit(event) {
    if (!this.processing) {
      this.processing = true;
      if (this.prevent)
        event.preventDefault();
      const result = {};
      if (this.form) {
        const elements = this.form.elements;
        for (let i = 0; i < elements.length; i++) {
          const element = elements.item(i);
          if (hasNameAndValue(element) && element.name)
            result[element.name] = element.value;
        }
        const smoothlyInputs = this.form.getElementsByTagName("smoothly-input");
        for (let i = 0; i < smoothlyInputs.length; i++) {
          const element = smoothlyInputs.item(i);
          if (hasNameAndValue(element) && element.name)
            result[element.name] = element.value;
        }
      }
      this.submitEvent.emit(result);
      this.processing = false;
    }
  }
  async submit() {
    let result;
    if ((result = !!this.form))
      this.form.submit();
    return result;
  }
  render() {
    return [
      h("smoothly-spinner", { active: this.processing }),
      h("button", { type: "submit", disabled: this.disabled || this.processing, ref: (element) => (this.button = element) }, h("slot", null)),
    ];
  }
};
function hasNameAndValue(element) {
  return (typeof element.name == "string" && typeof element.value == "string");
}
SmoothlySubmit.style = styleCss;

export { SmoothlySubmit as smoothly_submit };

//# sourceMappingURL=smoothly-submit.entry.js.map