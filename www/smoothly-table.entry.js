import { r as registerInstance, h, j as getElement } from './index-80daacae.js';

const styleCss = ".sc-smoothly-table-h{display:table;text-align:left;border-collapse:collapse;border:3px solid rgb(var(--smoothly-dark-color), 0.5);width:100%;box-sizing:border-box;background-color:rgb(var(--smoothly-default-color))}";

const Table = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return [h("slot", null)];
  }
  get element() { return getElement(this); }
};
Table.style = styleCss;

export { Table as smoothly_table };

//# sourceMappingURL=smoothly-table.entry.js.map