import { r as registerInstance, h } from './index-80daacae.js';

const styleCss = ".sc-smoothly-table-header-h{display:table-cell;padding:0.75rem 0.5rem;background-color:rgb(var(--smoothly-default-color));border:1px solid rgb(var(--smoothly-dark-color), 0.5);line-height:2.5rem}";

const TableHeader = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return h("slot", null);
  }
};
TableHeader.style = styleCss;

export { TableHeader as smoothly_table_header };

//# sourceMappingURL=smoothly-table-header.entry.js.map