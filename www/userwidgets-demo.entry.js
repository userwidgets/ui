import { r as registerInstance, h } from './index-80daacae.js';
import './index-e8364687.js';
import { A as App } from './App-4328cdd3.js';
import './index-52596bb8.js';
import './GoogleFont-ed2dd269.js';

const styleCss = "";

const Demo = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h(App, { label: "Userwidgets ui demo" }, h("smoothly-room", { path: "/version" }, h("userwidgets-demo-version", null))));
  }
};
Demo.style = styleCss;

export { Demo as userwidgets_demo };

//# sourceMappingURL=userwidgets-demo.entry.js.map