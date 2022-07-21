import { r as registerInstance, i as createEvent, h, k as Host, j as getElement } from './index-80daacae.js';

const styleCss = ".sc-smoothly-table-row-h{display:table-row;border:1px solid rgb(var(--smoothly-dark-color), 0.5);cursor:pointer}.sc-smoothly-table-row-h:nth-child(even){background-color:rgb(var(--smoothly-default-color))}.sc-smoothly-table-row-h:hover{background-color:rgb(var(--smoothly-default-color))}.hide.sc-smoothly-table-row{display:none}";

const TableRow = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.expansionOpen = createEvent(this, "expansionOpen", 7);
    this.align = "left";
  }
  openChanged(value) {
    if (this.expansionElement)
      this.element.after(this.expansionElement);
  }
  onClick(e) {
    this.open = !this.open;
    e.stopPropagation();
  }
  componentDidRender() {
    this.expansionOpen.emit(this.expansionElement);
    if (this.expansionElement && this.open)
      this.element.after(this.expansionElement);
  }
  render() {
    return (h(Host, { style: { textAlign: this.align } }, h("slot", null), h("tr", { ref: e => (this.expansionElement = e) }, h("td", { colSpan: 500, class: !this.open ? "hide" : "" }, h("slot", { name: "detail" })))));
  }
  get element() { return getElement(this); }
  static get watchers() { return {
    "open": ["openChanged"]
  }; }
};
TableRow.style = styleCss;

export { TableRow as smoothly_table_row };

//# sourceMappingURL=smoothly-table-row.entry.js.map