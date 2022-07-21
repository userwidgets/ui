import { r as registerInstance, h, k as Host } from './index-80daacae.js';

const styleCss = ".sc-smoothly-table-cell-h{display:table-cell;padding:0.5em}";

const TableCell = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h(Host, null, h("slot", null)));
  }
};
TableCell.style = styleCss;

export { TableCell as smoothly_table_cell };

//# sourceMappingURL=smoothly-table-cell.entry.js.map