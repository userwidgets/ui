import { r as registerInstance, i as createEvent, h, k as Host, j as getElement } from './index-80daacae.js';

const styleCss = ":host{--background-color:var(--smoothly-default-color), 1;--color:var(--smoothly-secondary-contrast);--border-color:var(--smoothly-default-shade), 1;--border-highlight-color:var(--smoothly-secondary-contrast), 1;--label-color:var(--smoothly-secondary-contrast), 0.8;--selected-item-border-radius:0.25rem;--selected-item-background-color:var(--smoothly-secondary-color), 1;--selected-item-color:255, 255, 255, 1}:host{display:block;position:relative;background-color:rgba(var(--background-color));width:100%;cursor:pointer;--intergiro-transition:border-color 200ms cubic-bezier(0.645, 0.045, 0.355, 1);transition:var(--intergiro-transition);border:1px solid rgb(var(--border-color));margin:1px;height:2.5rem;border-radius:0.25rem}:host(:focus-within){border-color:rgb(var(--smoothly-primary-shade));border-width:2px;margin:0px}:host>div{display:flex;background-color:transparent;min-height:2.5rem;align-items:center;align-self:center;border:none;max-height:var(--max-height)}:host>div .icons>smoothly-icon{flex-shrink:0;padding-left:0.6em;stroke:rgba(var(--color), 0.4);fill:rgba(var(--color), 0.4);width:1.5em !important;height:1.5em !important}:host>div .icons>smoothly-icon:hover{fill:rgba(var(--color), 1)}:host>div input{width:100%;background-color:transparent;outline:none;border:none;cursor:pointer;color:rgb(var(--color));padding:0 0.6rem;font-family:var(--smoothly-font-family);font-size:1.05rem}:host>div input::placeholder{opacity:1;text-overflow:ellipsis}:host([is-open])>div input{color:rgb(var(--smoothly-medium-color))}:host(:not(:focus-within)[multiple]) ul>li:last-child{position:absolute;pointer-events:none}:host([label=\"\"]) ul,:host:not([label]) ul,:host([label-setting=hide]) ul{padding-top:0.1rem;padding-bottom:0.1rem}label{padding-left:0.6rem;white-space:nowrap;color:rgba(var(--label-color));transition:var(--intergiro-transition);font-family:var(--smoothly-font-family);pointer-events:none;transform-origin:left}:host([has-selection]) label{display:var(--label-display)}:host([has-selection]) label,:host(:focus-within) label{display:none}:host(:hover) smoothly-icon[data-arrow],:host(:focus-within) smoothly-icon[data-arrow]{stroke:rgba(var(--color), 1)}:host smoothly-icon[data-arrow]{pointer-events:none}:host smoothly-icon{flex-shrink:0;width:1rem;height:1rem}:host(:not([is-open])) smoothly-icon.up,:host([is-open]) smoothly-icon.down{display:none}smoothly-icon.search{display:flex;align-self:center;padding-left:0.8rem}smoothly-icon.up,smoothly-icon.down{display:flex;align-self:center;padding-right:0.8rem;stroke:rgb(var(--smoothly-primary-shade))}:host smoothly-menu-options{margin-top:0.5rem;padding-top:0.5rem;padding-bottom:0.5rem;position:absolute;z-index:1}:host(:not([is-open]))>smoothly-menu-options{display:none}";

const SmoothlyPicker = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.menuClose = createEvent(this, "menuClose", 7);
    this.keepFocusOnReRender = false;
    this.emptyMenuLabel = "No Options";
    this.multiple = false;
    this.options = [];
    this.selections = [];
    this.selectNoneName = "Select None";
    this.selectionName = "items selected";
  }
  isOpenChangeHander() {
    if (this.isOpen == false) {
      this.menuClose.emit(this.selections);
    }
  }
  componentDidRender() {
    this.filterOptions();
    if (this.keepFocusOnReRender) {
      this.inputElement.focus();
      this.keepFocusOnReRender = false;
    }
  }
  optionSelectHander(event) {
    this.toggle(event.detail);
    event.stopPropagation();
  }
  toggle(option) {
    option.value == "select-none"
      ? this.toggleAll()
      : this.selections.map(s => s.value).includes(option.value)
        ? this.unselect(option)
        : this.select(option);
  }
  toggleAll() {
    var _a;
    this.selections = this.selections.length == ((_a = this.options) === null || _a === void 0 ? void 0 : _a.length) ? [] : this.options;
    this.inputElement.focus();
    this.keepFocusOnReRender = true;
  }
  unselect(selection) {
    const index = this.selections.map(selection => selection.value).indexOf(selection.value);
    if (index != -1) {
      this.selections = [
        ...this.selections.slice(0, index),
        ...this.selections.slice(index + 1, this.selections.length),
      ];
      this.keepFocusOnReRender = true;
    }
  }
  select(selection) {
    const isNewSelection = this.selections.reduce((acc, current) => acc && current.value != selection.value, true);
    if (isNewSelection)
      this.selections = this.multiple ? [...this.selections, selection] : [selection];
    this.inputElement.value = "";
    this.filterOptions();
    this.keepFocusOnReRender = true;
    this.isOpen = this.multiple;
  }
  toggleHighlighted() {
    var _a;
    (_a = this.menuElement) === null || _a === void 0 ? void 0 : _a.getHighlighted().then((result) => {
      result && this.toggle(result);
    });
  }
  highlightDefault() {
    var _a;
    this.filterOptions();
    (_a = this.menuElement) === null || _a === void 0 ? void 0 : _a.setHighlight(this.multiple || this.selections.length == 0 ? 0 : this.selections[0].value);
  }
  filterOptions() {
    var _a;
    (_a = this.menuElement) === null || _a === void 0 ? void 0 : _a.filterOptions(this.inputElement.value, []);
  }
  onInput(event) {
    this.isOpen = this.inputElement.value != "" ? true : this.isOpen;
    this.highlightDefault();
  }
  onKeyDown(event) {
    var _a;
    if (event.key == "ArrowUp" || event.key == "ArrowDown") {
      (_a = this.menuElement) === null || _a === void 0 ? void 0 : _a.moveHighlight(event.key == "ArrowUp" ? -1 : 1);
      event.preventDefault();
    }
    else if (event.key == "Enter" && this.isOpen)
      this.toggleHighlighted();
    else if (event.key == "Escape") {
      this.inputElement.value = "";
      this.isOpen = false;
      this.filterOptions();
    }
    else if (event.key == " " && this.inputElement.value == "") {
      event.preventDefault();
      this.isOpen = true;
      this.filterOptions();
    }
  }
  onClick() {
    this.isOpen = !this.isOpen;
    this.inputElement.focus();
    this.highlightDefault();
    this.filterOptions();
  }
  onBlur() {
    this.inputElement.value = "";
    this.isOpen = false;
    this.filterOptions();
  }
  getCheckHtml(checked) {
    return checked ? (h("smoothly-icon", { name: "checkbox", size: "small" })) : (h("smoothly-icon", { name: "square-outline", size: "small" }));
  }
  render() {
    var _a, _b, _c, _d;
    const cssVariables = {
      "--max-height": (_a = this.maxHeight) !== null && _a !== void 0 ? _a : "inherit",
      "--label-display": this.labelSetting == "hide" ? "none" : "absolute",
    };
    (_b = this.options) === null || _b === void 0 ? void 0 : _b.forEach(o => {
      o.left = this.getCheckHtml(this.selections.map(s => s.value).includes(o.value));
    });
    const options = [
      ...(this.multiple
        ? [
          {
            value: "select-none",
            name: this.selectNoneName,
            left: this.getCheckHtml(this.selections.length == ((_c = this.options) === null || _c === void 0 ? void 0 : _c.length)),
            divider: true,
          },
        ]
        : []),
      ...((_d = this.options) !== null && _d !== void 0 ? _d : []),
    ];
    return (h(Host, { style: cssVariables, "has-selection": this.selections.length > 0, "is-open": this.isOpen ? "" : undefined, onMouseDown: (e) => e.preventDefault(), onClick: () => this.onClick() }, h("div", null, h("smoothly-icon", { class: "search", name: "search-outline", size: "tiny" }), h("label", null, this.label), h("input", { type: "text", ref: (el) => (this.inputElement = el ? el : this.inputElement), onFocus: () => this.highlightDefault(), onBlur: () => this.onBlur(), placeholder: this.selections.length > 3
        ? this.selections.length.toString() + " " + this.selectionName
        : this.selections.map(selection => selection.name).join(", "), onKeyDown: e => this.onKeyDown(e), onInput: (e) => this.onInput(e) }), h("smoothly-icon", { class: "down", name: "chevron-down", size: "tiny" }), h("smoothly-icon", { class: "up", name: "chevron-up", size: "tiny" })), h("smoothly-menu-options", { style: { width: "100%" }, optionStyle: Object.assign({}, this.optionStyle), order: false, emptyMenuLabel: this.emptyMenuLabel, "max-menu-height": this.maxMenuHeight, ref: (el) => (this.menuElement = el !== null && el !== void 0 ? el : this.menuElement), onClick: e => e.stopPropagation(), resetHighlightOnOptionsChange: false, options: options })));
  }
  get element() { return getElement(this); }
  static get watchers() { return {
    "selections": ["isOpenChangeHander"],
    "isOpen": ["isOpenChangeHander"]
  }; }
};
SmoothlyPicker.style = styleCss;

export { SmoothlyPicker as smoothly_picker };

//# sourceMappingURL=smoothly-picker.entry.js.map