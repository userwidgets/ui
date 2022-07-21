import { r as registerInstance, h } from './index-80daacae.js';

const styleCss = ".sc-smoothly-select-demo-h{display:block}[hidden].sc-smoothly-select-demo-h{display:none}button.sc-smoothly-select-demo:focus{outline:none}smoothly-selector.sc-smoothly-select-demo{outline:none}";

const SmoothlySelectDemo = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.currencies = ["SEK", "EUR"];
    this.currency = "SEK";
  }
  alertf() {
    var _a;
    console.log(this.quantityElement);
    alert((_a = this.quantityElement) === null || _a === void 0 ? void 0 : _a.value);
  }
  handleSelectionChanged(event) {
    console.log("selectionChanged", event.detail);
  }
  render() {
    return [
      h("smoothly-select", { identifier: "currency" }, this.currencies.map(option => this.currency == option ? (h("option", { value: option, selected: true }, option)) : (h("option", { value: option }, option)))),
      h("smoothly-select", { identifier: "language" }, h("optgroup", { label: "Nordic" }, h("option", { value: "sv" }, "Swedish"), h("option", { value: "da", selected: true }, "Danish"), h("option", { value: "no" }, "Norwegian")), h("optgroup", { label: "Other" }, h("option", { value: "en" }, "English"))),
      h("smoothly-select", { identifier: "quantity", ref: e => (this.quantityElement = e) }, h("option", { value: "1" }, "1"), h("option", { value: "2" }, "2"), h("option", { value: "3" }, "3")),
      h("smoothly-input-date", null, "Date"),
      h("smoothly-input-date", { value: "2021-10-28", max: "2021-12-30", min: "2021-10-10" }, "Date"),
      h("smoothly-input-date-range", { start: "2022-10-28", end: "2022-11-27", min: "2021-10-10", max: "2022-12-30" }),
      h("smoothly-input-date-range", { start: "2022-10-28", end: "2022-11-27", min: "2021-10-10", max: "2022-12-30", showLabel: false, style: {
          "--background": "rgb(var(--smoothly-dark-shade))",
          "--border-radius": "4px",
          "--padding": "0 0.75em",
          "--input-width": "6rem",
        } }),
      h("smoothly-selector", null, h("smoothly-item", { value: "1" }, "January"), h("smoothly-item", { value: "2" }, "February"), h("smoothly-item", { value: "3" }, "March"), h("smoothly-item", { value: "4" }, "April"), h("smoothly-item", { value: "5" }, "May"), h("smoothly-item", { value: "6" }, "June"), h("smoothly-item", { value: "7" }, "July"), h("smoothly-item", { value: "8" }, "August"), h("smoothly-item", { value: "9" }, "September"), h("smoothly-item", { value: "10" }, "October"), h("smoothly-item", { value: "11" }, "November"), h("smoothly-item", { value: "12" }, "December")),
      h("button", { onClick: () => this.alertf() }, "press here"),
      h("smoothly-picker", { label: "Filter", "empty-menu-label": "Sorry, we're out of options.", "max-height": "58px", multiple: true, options: [
          { name: "Big Dog", value: "dog", aliases: ["WOFF"] },
          { name: "Cat Stevens", value: "cat", aliases: ["moew"] },
          { name: "Noble Pig", value: "pig" },
          { name: "Turtle Wax", value: "turtle" },
          { name: "Spider Man", value: "spider" },
          { name: "Phoenix Order Long Wooord", value: "phoenix" },
          { name: "Horse Back", value: "horse" },
          { name: "Unicorn Horn", value: "unicorn" },
          { name: "Talking Parrot Parrot", value: "parrot" },
          { name: "Hidden Dragon", value: "dragon" },
          { name: "Scary Kraken", value: "kraken" },
        ] }),
      h("br", null),
      h("smoothly-picker", { label: "", "empty-menu-label": "Sorry, we're out of options.", "max-height": "58px", multiple: true, options: [
          { name: "Big Dog", value: "dog", aliases: ["WOFF"] },
          { name: "Cat Stevens", value: "cat", aliases: ["moew"] },
          { name: "Noble Pig", value: "pig" },
          { name: "Turtle Wax", value: "turtle" },
          { name: "Spider Man", value: "spider" },
          { name: "Phoenix Order Long Wooord", value: "phoenix" },
          { name: "Horse Back", value: "horse" },
          { name: "Unicorn Horn", value: "unicorn" },
          { name: "Talking Parrot Parrot", value: "parrot" },
          { name: "Hidden Dragon", value: "dragon" },
          { name: "Scary Kraken", value: "kraken" },
        ] }),
      h("br", null),
      h("smoothly-picker", { label: "Single select", multiple: false, "max-menu-height": "200px", options: [
          { name: "Dog", value: "dog", aliases: ["WOFF"], right: "Woof 🐶" },
          { name: "Cat", value: "cat", aliases: ["moew"] },
          { name: "Pig", value: "pig" },
          { name: "Turtle", value: "turtle" },
          { name: "Spider", value: "spider" },
          { name: "Phoenix", value: "phoenix" },
          { name: "Horse", value: "horse" },
          { name: "Unicorn", value: "unicorn" },
          { name: "Parrot", value: "parrot" },
          { name: "Dragon", value: "dragon" },
          { name: "Kraken", value: "kraken" },
        ] }),
      h("smoothly-tab-switch", null, h("smoothly-tab", { label: "test1", open: true }, "Hello world!"), h("smoothly-tab", { label: "test2" }, "this is a test message!"), h("smoothly-tab", { label: "test3" }, "this is a test message again!")),
    ];
  }
};
SmoothlySelectDemo.style = styleCss;

export { SmoothlySelectDemo as smoothly_select_demo };

//# sourceMappingURL=smoothly-select-demo.entry.js.map