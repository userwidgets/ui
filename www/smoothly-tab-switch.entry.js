import { r as registerInstance, h, k as Host, j as getElement } from './index-80daacae.js';

const styleCss = ".sc-smoothly-tab-switch-h{display:flex;flex-direction:row;margin:1em 1em 0em 0em}";

const SmoothlyTabSwitch = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  openChanged(event) {
    this.selectedElement = event.target;
    this.selectedElement.open = true;
    this.element.after(event.detail);
  }
  onSelectedChange(value, old) {
    if (old)
      old.open = false;
  }
  render() {
    return (h(Host, null, h("slot", null)));
  }
  get element() { return getElement(this); }
  static get watchers() { return {
    "selectedElement": ["onSelectedChange"]
  }; }
};
SmoothlyTabSwitch.style = styleCss;

export { SmoothlyTabSwitch as smoothly_tab_switch };

//# sourceMappingURL=smoothly-tab-switch.entry.js.map