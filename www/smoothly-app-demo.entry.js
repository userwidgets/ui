import { r as registerInstance, h } from './index-80daacae.js';
import { A as App } from './App-4328cdd3.js';

const SmoothlyAppDemo = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h(App, { label: "Smoothly Demo" }, h("a", { slot: "nav-start", href: "display" }, "Display"), h("a", { slot: "nav-start", href: "https://google.com" }, "External"), h("smoothly-room", { path: "" }, h("smoothly-input", { type: "text" }, "Default"), h("div", { style: { padding: "1em", maxWidth: "12em" } }, h("smoothly-button", { fill: "solid", color: "danger", link: "https://google.com" }, "open"), h("smoothly-button", { fill: "solid", color: "danger", link: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf", download: true }, "download"), h("smoothly-button", { fill: "solid", color: "danger", onClick: () => alert("clicked") }, "action"), h("smoothly-button", { type: "link", fill: "clear", color: "danger", onClick: () => alert("clicked") }, "action link"))), h("smoothly-room", { path: "input", label: "Input" }, h("smoothly-input-demo", null)), h("smoothly-room", { path: "dialog", label: "Dialog" }, h("smoothly-dialog-demo", null)), h("smoothly-room", { path: "display", label: "Display", icon: "eye-outline" }, h("smoothly-display-demo", null)), h("smoothly-room", { path: "table", label: "Table" }, h("smoothly-table-demo", null)), h("smoothly-room", { path: "select", label: "Select" }, h("smoothly-select-demo", null)), h("smoothly-room", { path: "icon", label: "Icon" }, h("smoothly-icon-demo", null)), h("smoothly-room", { path: "old", label: "Old", to: "select" }), h("span", { slot: "header", style: { width: "100%", maxWidth: "500px" } }, h("smoothly-picker", { label: "All Animals Selected", style: { minWidth: "100px" }, labelSetting: "hide", "empty-menu-label": "Sorry, we're out of options.", "max-height": "58px", multiple: true, "select-none-name": "Select All", options: [
        { name: "Big Dog", value: "dog", aliases: ["WOFF"] },
        { name: "Cat Stevens", value: "cat", aliases: ["moew"], right: "🐈" },
        { name: "Noble Pig", value: "pig", right: "🐷" },
        { name: "Turtle Wax", value: "turtle", right: "" },
        { name: "Spider Man", value: "spider", right: "" },
        { name: "Phoenix Order Long Wooord", value: "phoenix", right: "" },
        { name: "Horse Back", value: "horse", right: "" },
        { name: "Unicorn Horn", value: "unicorn", right: "" },
        { name: "Talking Parrot Parrot", value: "parrot", right: "" },
        { name: "Hidden Dragon", value: "dragon", right: "" },
        { name: "Scary Kraken", value: "kraken", right: "" },
      ] })), h("smoothly-trigger", { slot: "header", type: "link", name: "logout" }, h("smoothly-icon", { toolTip: "Log out", name: "log-out", size: "medium" }))));
  }
};

export { SmoothlyAppDemo as smoothly_app_demo };

//# sourceMappingURL=smoothly-app-demo.entry.js.map