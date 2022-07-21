import { r as registerInstance, i as createEvent, h, k as Host, j as getElement } from './index-80daacae.js';

const styleCss = ".sc-smoothly-selector-h{position:relative;height:100%}.sc-smoothly-selector-h>main.sc-smoothly-selector,.sc-smoothly-selector-h>main.sc-smoothly-selector>*.sc-smoothly-selector{height:100%;display:flex;align-items:center}.sc-smoothly-selector-h>div.sc-smoothly-selector>nav.sc-smoothly-selector{display:flex;flex-direction:column;position:absolute;z-index:10}.sc-smoothly-selector-h>aside.sc-smoothly-selector{position:absolute;top:0;left:5em;z-index:10;background-color:rgb(var(--smoothly-tertiary-color));color:rgb(var(--smoothly-tertiary-contrast));height:1.25rem;border-radius:0.3rem;padding:0.3rem;display:flex;align-items:center}.missing.sc-smoothly-selector-h>aside.sc-smoothly-selector{background-color:rgb(var(--smoothly-warning-color));color:rgb(var(--smoothly-warning-contast))}.hidden.sc-smoothly-selector{display:none}.sc-smoothly-selector-h>section.sc-smoothly-selector{position:fixed;top:0px;left:0px;width:100vw;height:100vh;z-index:10}";

const Selector = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.selected = createEvent(this, "selected", 7);
    this.opened = false;
    this.items = [];
    this.missing = false;
    this.filter = "";
  }
  onSelectedChange(value, old) {
    if (old)
      old.selected = false;
    this.selected.emit(value === null || value === void 0 ? void 0 : value.value);
  }
  async onFilterChange(value) {
    value = value.toLowerCase();
    if (!(await Promise.all(this.items.map(item => item.filter(value)))).some(r => r)) {
      this.missing = true;
      this.items.forEach(el => el.filter(""));
    }
    else
      this.missing = false;
  }
  onClick(event) {
    event.stopPropagation();
    this.opened = !this.opened;
  }
  onItemSelected(event) {
    this.selectedElement = event.target;
    if (this.mainElement)
      this.mainElement.innerHTML = this.selectedElement.innerHTML;
  }
  onKeyDown(event) {
    event.stopPropagation();
    if (this.opened) {
      let direction = 0;
      switch (event.key) {
        case "ArrowUp":
          direction = -1;
          break;
        case "ArrowDown":
          direction = 1;
          break;
        case "Escape":
          this.filter = "";
          break;
        case "Backspace":
          this.filter = this.filter.slice(0, -1);
          break;
        case "Enter":
          this.items.forEach(element => {
            if (!element.hidden) {
              this.selected.emit(element.value);
              if (this.mainElement && this.selectedElement)
                this.mainElement.innerHTML = this.selectedElement.innerHTML;
              this.opened = false;
              this.filter = "";
            }
          });
          break;
        default:
          if (event.key.length == 1)
            this.filter += event.key;
          break;
      }
      this.move(direction);
    }
    else if (event.key == "Enter")
      this.opened = true;
  }
  move(direction) {
    if (direction) {
      let selectedIndex = this.items.findIndex(item => item == this.selectedElement);
      console.log("selectedindex", selectedIndex);
      do {
        selectedIndex = (selectedIndex + direction + this.items.length) % this.items.length;
      } while (this.items[selectedIndex].hidden);
      this.selectedElement = this.items[selectedIndex];
      this.selectedElement.selected = true;
    }
  }
  render() {
    return (h(Host, { tabIndex: 2, class: this.missing ? "missing" : "" }, h("main", { ref: element => (this.mainElement = element) }, "(none)"), this.filter.length != 0 ? (h("aside", { ref: element => (this.aside = element) }, this.filter, h("button", { onClick: e => {
        e.stopPropagation();
        this.filter = "";
      } }, h("smoothly-icon", { name: "close", size: "small" })))) : undefined, this.opened ? h("section", { onClick: () => (this.opened = true) }) : [], h("div", { class: this.opened ? "" : "hidden" }, h("nav", null, h("slot", null)))));
  }
  componentDidRender() {
    const items = [];
    const children = this.element.querySelectorAll("div > nav > smoothly-item");
    for (let i = 0; i < children.length; i++) {
      const node = children.item(i);
      if (isItem(node))
        items.push(node);
    }
    this.items = items;
  }
  get element() { return getElement(this); }
  static get watchers() { return {
    "selectedElement": ["onSelectedChange"],
    "filter": ["onFilterChange"]
  }; }
};
function isItem(value) {
  return (typeof value == "object" &&
    (typeof value.selected == "boolean" || value.selected == undefined) &&
    typeof value.filter == "function");
}
Selector.style = styleCss;

export { Selector as smoothly_selector };

//# sourceMappingURL=smoothly-selector.entry.js.map