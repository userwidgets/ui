import { r as registerInstance, h } from './index-80daacae.js';

const Urlencoded = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return this.data
      .split("&")
      .map(p => p.split("="))
      .map(tuple => h("smoothly-tuple", { tuple: tuple }));
  }
};

export { Urlencoded as smoothly_urlencoded };

//# sourceMappingURL=smoothly-urlencoded.entry.js.map