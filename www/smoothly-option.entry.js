import { r as registerInstance, i as createEvent, h, k as Host, j as getElement } from './index-80daacae.js';

const styleCss = ":host{display:flex;flex-direction:row;align-items:center;justify-content:flex-start;padding:0.7em 1em;margin-left:1px;margin-right:1px;background-color:transparent;position:relative}:host([data-highlight]){background-color:rgb(var(--smoothly-default-shade))}:host>div.middle{padding-left:0.5em;flex-shrink:1;width:100%}:host([divider]){margin-bottom:0.5em}::slotted([slot=right]){font-style:italic;white-space:nowrap}:host([divider])::after{position:absolute;height:1px;width:100%;left:0;bottom:-0.25em;content:\"\";background-color:rgba(var(--smoothly-dark-color))}";

const SmoothlyOption = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.optionHover = createEvent(this, "optionHover", 7);
    this.optionSelect = createEvent(this, "optionSelect", 7);
    this.dataHighlight = false;
    this.divider = false;
  }
  onHover(event) {
    this.optionHover.emit({ name: this.name, value: this.value });
  }
  onSelect(event) {
    if (this.value)
      this.optionSelect.emit({ name: this.name, value: this.value });
    else
      throw `smoothly-option ${this.element.innerHTML} lacks value-property and can therefore not be selected`;
  }
  render() {
    return (h(Host, { onMouseDown: (e) => this.onSelect(e), onMouseOver: (e) => this.onHover(e) }, h("slot", { name: "left" }), h("div", { class: "middle" }, this.name), h("slot", { name: "right" })));
  }
  get element() { return getElement(this); }
};
SmoothlyOption.style = styleCss;

export { SmoothlyOption as smoothly_option };

//# sourceMappingURL=smoothly-option.entry.js.map