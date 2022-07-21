import { r as registerInstance, h } from './index-80daacae.js';
import { s as store } from './index-f43c9f9a.js';
import './client-f75125eb.js';
import './index-5e02d811.js';

const styleCss = "";

const DemoVersion = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  componentWillRender() {
    store.version.listen("changed", apiInfo => (this.apiInfo = apiInfo));
  }
  render() {
    return this.apiInfo ? (h("p", null, "Currently using ", this.apiInfo.name, " version ", this.apiInfo.version)) : (h("p", null, "Fetching api info..."));
  }
};
DemoVersion.style = styleCss;

export { DemoVersion as userwidgets_demo_version };

//# sourceMappingURL=userwidgets-demo-version.entry.js.map