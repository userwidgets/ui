import { r as registerInstance, h, k as Host } from './index-80daacae.js';

const styleCss = ".sc-smoothly-quiet-h{opacity:0.5}";

const SmoothlyQuiet = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h(Host, { color: this.color }, h("slot", null)));
  }
};
SmoothlyQuiet.style = styleCss;

export { SmoothlyQuiet as smoothly_quiet };

//# sourceMappingURL=smoothly-quiet.entry.js.map