import { r as registerInstance, i as createEvent, h, j as getElement } from './index-80daacae.js';

const styleCss = "[selected].sc-smoothly-item-h{background-color:rgb(var(--smoothly-primary-shade));color:rgb(var(--smoothly-primary-contrast))}.sc-smoothly-item-h{padding:.5em;cursor:pointer;background-color:rgb(var(--smoothly-default-shade));color:rgb(var(--smoothly-default-contrast));border:rgb(var(--smoothly-default-shade) solid 1px)}.sc-smoothly-item-h:hover{background-color:rgb(var(--smoothly-primary-color));color:rgb(var(--smoothly-primary-contrast))}";

const Item = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.itemSelected = createEvent(this, "itemSelected", 7);
  }
  onSelectedChanged(value, old) {
    if (value && !old)
      this.itemSelected.emit();
  }
  onClick() {
    this.selected = true;
    this.itemSelected.emit();
  }
  componentDidLoad() {
    if (this.selected)
      this.itemSelected.emit();
  }
  async filter(filter) {
    const result = !(this.element.hidden = filter
      ? !((typeof this.value === "string" ? this.value : JSON.stringify(this.value)).toLowerCase().includes(filter) ||
        this.element.innerText.toLowerCase().includes(filter))
      : false);
    return result;
  }
  render() {
    return h("slot", null);
  }
  get element() { return getElement(this); }
  static get watchers() { return {
    "selected": ["onSelectedChanged"]
  }; }
};
Item.style = styleCss;

export { Item as smoothly_item };

//# sourceMappingURL=smoothly-item.entry.js.map