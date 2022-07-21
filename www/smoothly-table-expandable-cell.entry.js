import { r as registerInstance, i as createEvent, h, k as Host, j as getElement } from './index-80daacae.js';

const styleCss = ".sc-smoothly-table-expandable-cell-h{display:table-cell;padding:0.5em}.hide.sc-smoothly-table-expandable-cell{display:none}";

const TableExpandableCell = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.expansionOpen = createEvent(this, "expansionOpen", 7);
    this.expansionLoaded = createEvent(this, "expansionLoaded", 7);
    this.align = "left";
  }
  openChanged(value) {
    if (this.expansionElement)
      if (value)
        this.beginOpen = true;
      else
        this.element.append(this.expansionElement);
  }
  onClick() {
    this.open = !this.open;
  }
  componentDidLoad() {
    this.expansionLoaded.emit();
  }
  componentDidRender() {
    if (this.beginOpen) {
      this.beginOpen = false;
      this.expansionOpen.emit(this.expansionElement);
    }
  }
  render() {
    return (h(Host, { style: { textAlign: this.align } }, h("slot", null), h("tr", { ref: e => (this.expansionElement = e) }, h("td", { colSpan: 500, class: !this.open ? "hide" : "" }, h("slot", { name: "detail" })))));
  }
  get element() { return getElement(this); }
  static get watchers() { return {
    "open": ["openChanged"]
  }; }
};
TableExpandableCell.style = styleCss;

export { TableExpandableCell as smoothly_table_expandable_cell };

//# sourceMappingURL=smoothly-table-expandable-cell.entry.js.map