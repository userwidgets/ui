import { r as registerInstance, h } from './index-80daacae.js';

const styleCss = "";

const TableDemo = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return [
      h("smoothly-table", null, h("smoothly-table-row", null, h("smoothly-table-header", null, "Header A"), h("smoothly-table-header", null, "Header B"), h("smoothly-table-header", null, "Header C")), h("smoothly-table-expandable-row", null, h("smoothly-table-expandable-cell", null, "Value 1A", h("div", { slot: "detail" }, "1A details")), h("smoothly-table-expandable-cell", null, h("smoothly-display", { type: "price", value: 20, currency: "EUR" }), h("div", { slot: "detail" }, "Budget details.")), h("smoothly-table-expandable-cell", null, h("smoothly-display", { type: "price", value: 18, currency: "EUR" }), h("div", { slot: "detail" }, "Cost details."))), h("smoothly-table-expandable-row", null, h("smoothly-table-expandable-cell", null, "Value 1A", h("div", { slot: "detail" }, "2A details")), h("smoothly-table-expandable-cell", null, h("smoothly-display", { type: "price", value: 30, currency: "EUR" }), h("div", { slot: "detail" }, "Budget details.")), h("smoothly-table-expandable-cell", null, h("smoothly-display", { type: "price", value: 38, currency: "EUR" }), h("div", { slot: "detail" }, "Cost details.")))),
      h("smoothly-table", null, h("smoothly-table-row", null, h("smoothly-table-header", null, "Header D"), h("smoothly-table-header", null, "Header E"), h("smoothly-table-header", null, "Header F")), h("smoothly-table-row", null, h("smoothly-table-cell", null, "Value 1A"), h("smoothly-table-cell", null, h("smoothly-display", { type: "price", value: 20, currency: "EUR" })), h("smoothly-table-cell", null, h("smoothly-display", { type: "price", value: 18, currency: "EUR" })), h("div", { slot: "detail" }, "Cost details.")), h("smoothly-table-row", null, h("smoothly-table-cell", null, "Value 1A"), h("smoothly-table-cell", null, h("smoothly-display", { type: "price", value: 20, currency: "EUR" })), h("smoothly-table-cell", null, h("smoothly-display", { type: "price", value: 18, currency: "EUR" })), h("div", { slot: "detail" }, "Cost details."))),
    ];
  }
};
TableDemo.style = styleCss;

export { TableDemo as smoothly_table_demo };

//# sourceMappingURL=smoothly-table-demo.entry.js.map