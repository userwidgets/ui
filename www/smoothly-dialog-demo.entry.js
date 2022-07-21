import { r as registerInstance, h } from './index-80daacae.js';

const SmoothlyDialogDemo = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h("smoothly-dialog", { color: "default", style: { "margin-top": "6vh" }, closable: true }, h("smoothly-frame", { url: "https://www.wikipedia.org/", name: "parent", style: { height: "80vh" } })));
  }
};

export { SmoothlyDialogDemo as smoothly_dialog_demo };

//# sourceMappingURL=smoothly-dialog-demo.entry.js.map