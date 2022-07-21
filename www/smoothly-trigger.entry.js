import { r as registerInstance, i as createEvent, h } from './index-80daacae.js';

const styleCss = ".sc-smoothly-trigger-h{display:block;border-style:solid;border-width:1px;border-radius:3px}[hidden].sc-smoothly-trigger-h{display:none}[disabled].sc-smoothly-trigger-h{opacity:0.5}button.sc-smoothly-trigger{border-color:transparent;background-color:transparent;padding:0.2em 0.3em;font-size:110%;font-weight:400}.sc-smoothly-trigger-h:not([disabled]):hover,.sc-smoothly-trigger-h:not([disabled]):focus,.sc-smoothly-trigger-h:not([disabled]):active{border-color:var(--smoothly-trigger-border)}[expand=fill].sc-smoothly-trigger-h>button.sc-smoothly-trigger,[expand=block].sc-smoothly-trigger-h>button.sc-smoothly-trigger{width:100%}[expand=fill].sc-smoothly-trigger-h{border-left:none;border-right:none}";

const SmoothlyTrigger = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.trigger = createEvent(this, "trigger", 7);
    this.disabled = false;
    this.type = "button";
  }
  onClick(e) {
    this.trigger.emit({ name: this.name, value: this.value });
    e.stopPropagation();
    e.preventDefault();
  }
  render() {
    let result;
    switch (this.type) {
      case "link":
        result = this.disabled ? (h("slot", null)) : (h("a", { onClick: e => this.onClick(e) }, h("slot", null)));
        break;
      case "button":
        result = (h("button", { disabled: this.disabled, name: this.name }, h("slot", null)));
        break;
    }
    return result;
  }
};
SmoothlyTrigger.style = styleCss;

export { SmoothlyTrigger as smoothly_trigger };

//# sourceMappingURL=smoothly-trigger.entry.js.map