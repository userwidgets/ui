import { r as registerInstance, i as createEvent, h, k as Host } from './index-80daacae.js';

const styleCss = ".sc-smoothly-tab-h:not([open])>label.sc-smoothly-tab{background-color:rgb(var(--smoothly-dark-shade))}.hide.sc-smoothly-tab{display:none}label.sc-smoothly-tab{display:block;padding:1em;background-color:rgb(var(--smoothly-default-shade));border-top-left-radius:0.3rem;border-top-right-radius:0.3rem;width:6.25rem}div.sc-smoothly-tab{background-color:rgb(var(--smoothly-default-shade));padding:1em}";

const SmoothlyTab = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.expansionOpen = createEvent(this, "expansionOpen", 7);
  }
  openChanged() {
    if (this.expansionElement) {
      this.expansionOpen.emit(this.expansionElement);
    }
  }
  onClick(e) {
    this.open = !this.open;
    e.stopPropagation();
  }
  componentDidLoad() {
    if (this.expansionElement && this.open) {
      this.expansionOpen.emit(this.expansionElement);
    }
  }
  render() {
    return (h(Host, null, h("label", null, this.label), h("div", { ref: e => (this.expansionElement = e), class: !this.open ? "hide" : "" }, h("slot", null))));
  }
  static get watchers() { return {
    "open": ["openChanged"]
  }; }
};
SmoothlyTab.style = styleCss;

export { SmoothlyTab as smoothly_tab };

//# sourceMappingURL=smoothly-tab.entry.js.map