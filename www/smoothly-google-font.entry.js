import { r as registerInstance, h } from './index-80daacae.js';
import { G as GoogleFont } from './GoogleFont-ed2dd269.js';

const SmoothlyGoogleFont = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return GoogleFont.is(this.value) ? h("style", null, GoogleFont.styleImportString(this.value)) : "";
  }
};

export { SmoothlyGoogleFont as smoothly_google_font };

//# sourceMappingURL=smoothly-google-font.entry.js.map