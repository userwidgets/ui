import { r as registerInstance, h } from './index-80daacae.js';
import { s as store } from './index-f43c9f9a.js';
import './client-f75125eb.js';
import './index-5e02d811.js';

const styleCss = ".sc-template-version-h{display:block}[hidden].sc-template-version-h{display:none}";

const ApiVersion = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  async componentWillLoad() {
    store.version.listen("changed", version => (this.apiInformation = version));
  }
  render() {
    return this.apiInformation ? (h("p", null, "Current ", this.apiInformation.name, " version: ", this.apiInformation.version)) : (h("p", null, "Loading api information..."));
  }
};
ApiVersion.style = styleCss;

export { ApiVersion as template_version };

//# sourceMappingURL=template-version.entry.js.map