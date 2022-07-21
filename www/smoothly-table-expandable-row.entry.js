import { r as registerInstance, h, k as Host, j as getElement } from './index-80daacae.js';

const styleCss = ".sc-smoothly-table-expandable-row-h{display:table-row;border:1px solid rgb(var(--smoothly-default-color));cursor:pointer}.sc-smoothly-table-expandable-row-h:nth-child(even){background-color:rgb(var(--smoothly-default-tint))}.sc-smoothly-table-expandable-row-h:hover{background-color:rgb(var(--smoothly-default-color))}";

const TableExpandableRow = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.expansions = [];
  }
  onExpansionLoaded(event) {
    this.expansions.push(event.target);
  }
  onDetailsLoaded(event) {
    this.expansions.forEach(cell => {
      if (cell != event.target)
        cell.open = false;
    });
    if (event.detail)
      this.element.after(event.detail);
  }
  render() {
    return (h(Host, null, h("slot", null)));
  }
  get element() { return getElement(this); }
};
TableExpandableRow.style = styleCss;

export { TableExpandableRow as smoothly_table_expandable_row };

//# sourceMappingURL=smoothly-table-expandable-row.entry.js.map