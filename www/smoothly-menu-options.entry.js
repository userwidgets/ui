import { r as registerInstance, h, k as Host, j as getElement } from './index-80daacae.js';

const styleCss = ":host{max-height:18.75rem;width:85%;max-height:var(--max-menu-height);box-sizing:border-box;background-color:rgb(var(--smoothly-default-color));border-radius:0.25em;color:rgb(var(--smoothly-primary-color));stroke:rgb(var(--smoothly-primary-color));fill:rgb(var(--smoothly-primary-color));box-shadow:0px 2px 1.5rem rgba(64, 60, 57, 0.08), inset 0px 0px 1px rgba(64, 60, 57, 0.4);overflow-y:auto;cursor:pointer}:host:first-child{margin:10em}";

const SmoothlyMenuOptions = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.filteredOptions = [];
    this.highlightIndex = 0;
    this.emptyMenuLabel = "No Options";
    this.order = false;
    this.options = [];
    this.resetHighlightOnOptionsChange = true;
  }
  optionsChangeHandler(newOptions) {
    this.highlightIndex = this.resetHighlightOnOptionsChange ? 0 : this.highlightIndex;
  }
  optionHoverHandler(event) {
    if (event.detail.value)
      this.setHighlight(event.detail.value);
    event.stopPropagation();
  }
  async moveHighlight(step) {
    if (this.filteredOptions.length > 0)
      this.setHighlight((this.highlightIndex + step + this.filteredOptions.length) % this.filteredOptions.length, true);
  }
  async setHighlight(newIndex, scrollToHighlight = false) {
    if (typeof newIndex == "number") {
      this.highlightIndex = newIndex;
      scrollToHighlight && this.scrollTo(this.highlightIndex);
    }
    else {
      const value = newIndex;
      let isHighlightSet = false;
      this.filteredOptions.forEach((option, index) => {
        const highlight = option.value == value;
        this.highlightIndex = highlight ? index : this.highlightIndex;
        highlight && scrollToHighlight && this.scrollTo(index);
        isHighlightSet = highlight ? true : isHighlightSet;
      });
      if (!isHighlightSet)
        this.setHighlight(0, true);
    }
  }
  async getHighlighted() {
    let result = undefined;
    if (this.highlightIndex != undefined && this.filteredOptions.length > 0)
      result = this.filteredOptions[this.highlightIndex];
    return result;
  }
  async filterOptions(keyword, excludeValues = []) {
    const keywordLowercase = keyword.toLowerCase();
    this.filteredOptions = [];
    for (const option of this.options) {
      const names = option.name + (option.aliases ? option.aliases.join(" ") : "");
      const isVisible = names.toLowerCase().includes(keywordLowercase) && !excludeValues.includes(option.value);
      isVisible && this.filteredOptions.push(option);
    }
    this.order && this.sortOptions(keyword);
  }
  sortOptions(keyword) {
    const keywordLowercase = keyword.toLowerCase();
    this.filteredOptions.sort((a, b) => {
      return this.getPriorityScore(a, keywordLowercase) - this.getPriorityScore(b, keywordLowercase);
    });
  }
  getPriorityScore(option, keywordLowercase) {
    let result = Number.MAX_SAFE_INTEGER;
    const name = option.name;
    const aliases = option.aliases ? option.aliases.join(" ") : "";
    const names = `${name ? name : ""} ${aliases ? aliases : ""}`.toLowerCase();
    if (name) {
      result = names.split(" ").reduce((minIndex, word) => {
        const index = word.indexOf(keywordLowercase);
        return index != -1 && index < minIndex ? index : minIndex;
      }, Number.MAX_SAFE_INTEGER);
    }
    return result;
  }
  scrollTo(optionIndex) {
    var _a;
    const optionHeight = (_a = this.firstOptionsElement) === null || _a === void 0 ? void 0 : _a.getBoundingClientRect().height;
    if (optionHeight) {
      const menuHeight = this.element.getBoundingClientRect().height;
      const scrollPosition = this.element.scrollTop;
      const optionPosition = optionIndex * optionHeight;
      const numOptionsInMenu = Math.floor(menuHeight / optionHeight);
      if (optionPosition - optionHeight / 2 < scrollPosition)
        this.element.scrollTo({ top: (optionIndex - 1) * optionHeight });
      else if (scrollPosition < optionPosition + optionHeight - menuHeight)
        this.element.scrollTo({ top: (optionIndex + 1 - numOptionsInMenu) * optionHeight });
    }
  }
  render() {
    return (h(Host, { style: { "--max-menu-height": this.maxMenuHeight } }, this.filteredOptions.length > 0 ? (this.filteredOptions.map((option, index) => (h("smoothly-option", { style: this.optionStyle, ref: el => index == 0 && (this.firstOptionsElement = el !== null && el !== void 0 ? el : this.firstOptionsElement), value: option.value, name: option.name, divider: option.divider, "data-highlight": this.highlightIndex == index }, option.left ? h("div", { slot: "left" }, option.left) : undefined, option.right ? h("div", { slot: "right" }, option.right) : undefined)))) : (h("div", null, this.emptyMenuLabel))));
  }
  get element() { return getElement(this); }
  static get watchers() { return {
    "options": ["optionsChangeHandler"]
  }; }
};
SmoothlyMenuOptions.style = styleCss;

export { SmoothlyMenuOptions as smoothly_menu_options };

//# sourceMappingURL=smoothly-menu-options.entry.js.map