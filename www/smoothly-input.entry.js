import { r as registerInstance, i as createEvent, h, k as Host } from './index-80daacae.js';
import { d as dist$1 } from './index-24ec0bc5.js';
import { d as dist } from './index-f74896ed.js';

const styleCss = ".sc-smoothly-input-h{display:block;position:relative;font-weight:var(--smoothly-font-weight);padding:var(--padding);overflow:hidden;background-color:rgb(var(--background-color));color:rgb(var(--text-color, var(--smoothly-default-contrast)))}[hidden].sc-smoothly-input-h{display:none}.sc-smoothly-input-h>div.sc-smoothly-input{position:relative;width:100%;height:100%}label.sc-smoothly-input{position:absolute;left:0.4em;top:0.6em;color:rgb(var(--text-color, var(--smoothly-default-contrast)));opacity:0.8;user-select:none;cursor:inherit;transition:transform 0.1s;transform-origin:top left;transition-timing-function:ease}.sc-smoothly-input-h:not([show-label]) label.sc-smoothly-input{display:none}.sc-smoothly-input-h:not([show-label]) input.sc-smoothly-input{padding:0.7em 0.3em 0.7em 0.4em}input.sc-smoothly-input{padding:1.2em 0.3em 0.2em 0.4em;box-sizing:border-box;width:100%;height:100%;background:none;border:0;z-index:1;position:relative;font-size:1rem;font-family:var(--smoothly-font-family);background-color:rgb(var(--background-color))}smoothly-icon.sc-smoothly-input{display:none;position:absolute;right:0.2em;top:0.6em}input.sc-smoothly-input:invalid+label.sc-smoothly-input+smoothly-icon.sc-smoothly-input{display:block}.sc-smoothly-input-h>div.sc-smoothly-input>label.sc-smoothly-input{z-index:1;pointer-events:none}.has-value.sc-smoothly-input-h>div.sc-smoothly-input>label.sc-smoothly-input,.sc-smoothly-input-h:focus-within>div.sc-smoothly-input>label.sc-smoothly-input{top:0.4em;transform:scale(0.6)}input.sc-smoothly-input:focus{outline:none}input.sc-smoothly-input:-webkit-autofill,input.sc-smoothly-input:-webkit-autofill:hover,input.sc-smoothly-input:-webkit-autofill:focus,input.sc-smoothly-input:-webkit-autofill:active{box-shadow:0 0 0 40em rgb(var(--background-color)) inset;-webkit-box-shadow:0 0 0 40em rgb(var(--background-color)) inset}input.sc-smoothly-input:-webkit-autofill,input.sc-smoothly-input:-webkit-autofill+label.sc-smoothly-input{-webkit-text-fill-color:rgb(var(--text-color, var(--smoothly-default-contrast)))}";

const SmoothlyInput = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.smoothlyChanged = createEvent(this, "smoothlyChanged", 7);
    this.keepFocusOnReRender = false;
    this.type = "text";
    this.required = false;
    this.minLength = 0;
    this.showLabel = true;
    this.maxLength = Number.POSITIVE_INFINITY;
    this.autocomplete = true;
    this.disabled = false;
  }
  get formatter() {
    let result;
    switch (this.type) {
      case "price":
        result = dist.get("price", this.currency);
        break;
      default:
        result = dist.get(this.type, getLocale());
        break;
    }
    return result || dist.get("text");
  }
  newState(state) {
    const formatter = this.formatter;
    return formatter.format(dist.StateEditor.copy(formatter.unformat(dist.StateEditor.copy(state))));
  }
  valueWatcher(value, before) {
    if (this.lastValue != value) {
      this.lastValue = value;
      this.state = Object.assign(Object.assign({}, this.state), { value: this.newState({ value: this.formatter.toString(value), selection: this.state.selection }).value });
    }
    if (value != before)
      this.smoothlyChanged.emit({ name: this.name, value });
  }
  onCurrency() {
    this.state = Object.assign(Object.assign({}, this.state), { value: this.newState({ value: this.formatter.toString(this.value), selection: this.state.selection }).value, pattern: this.newState({ value: this.formatter.toString(this.value), selection: this.state.selection }).pattern });
  }
  componentWillLoad() {
    const value = this.formatter.toString(this.value) || "";
    const start = value.length;
    this.state = this.newState({
      value,
      selection: { start, end: start, direction: "none" },
    });
  }
  componentDidRender() {
    if (this.keepFocusOnReRender) {
      this.inputElement.focus();
      this.keepFocusOnReRender = false;
    }
  }
  async getFormData(name) {
    const result = {};
    const form = document.forms.namedItem(name);
    if (form) {
      const elements = form.elements;
      for (let i = 0; i < elements.length; i++) {
        const element = elements.item(i);
        if (this.hasNameAndValue(element) && element.name)
          result[element.name] = element.value;
      }
      const smoothlyInputs = form.getElementsByTagName("smoothly-input");
      for (let i = 0; i < smoothlyInputs.length; i++) {
        const element = smoothlyInputs.item(i);
        if (this.hasNameAndValue(element) && element.name)
          result[element.name] = element.value;
      }
    }
    return result;
  }
  hasNameAndValue(element) {
    return (typeof element.name == "string" && typeof element.value == "string");
  }
  async setKeepFocusOnReRender(keepFocus) {
    this.keepFocusOnReRender = keepFocus;
  }
  async setSelectionRange(start, end, direction) {
    this.state = this.newState(Object.assign(Object.assign({}, this.state), { selection: { start, end, direction: direction != undefined ? direction : this.state.selection.direction } }));
    const after = this.formatter.format(dist.StateEditor.copy(this.formatter.unformat(dist.StateEditor.copy(Object.assign({}, this.state)))));
    this.updateBackend(after, this.inputElement);
  }
  onBlur(event) { }
  onFocus(event) {
    const after = this.formatter.format(dist.StateEditor.copy(this.formatter.unformat(dist.StateEditor.copy(Object.assign({}, this.state)))));
    if (event.target)
      this.updateBackend(after, event.target);
  }
  onClick(event) {
    const backend = event.target;
    this.state = Object.assign(Object.assign({}, this.state), { value: backend.value, selection: {
        start: backend.selectionStart != undefined ? backend.selectionStart : backend.value.length,
        end: backend.selectionEnd != undefined ? backend.selectionEnd : backend.value.length,
        direction: backend.selectionDirection ? backend.selectionDirection : "none",
      } });
    const after = this.newState(Object.assign({}, this.state));
    this.updateBackend(after, backend);
  }
  onKeyDown(event) {
    if (event.key && !(event.key == "Unidentified")) {
      const backend = event.target;
      this.state = Object.assign(Object.assign({}, this.state), { value: backend.value, selection: {
          start: backend.selectionStart != undefined ? backend.selectionStart : backend.value.length,
          end: backend.selectionEnd != undefined ? backend.selectionEnd : backend.value.length,
          direction: backend.selectionDirection ? backend.selectionDirection : "none",
        } });
      if ((!((event.ctrlKey || event.metaKey) && (event.key == "v" || event.key == "c")) && event.key.length == 1) ||
        event.key == "ArrowLeft" ||
        event.key == "ArrowRight" ||
        event.key == "Delete" ||
        event.key == "Backspace" ||
        event.key == "Home" ||
        event.key == "End") {
        event.preventDefault();
        this.processKey(event, backend);
      }
      else if (event.key == "ArrowUp" || event.key == "ArrowDown")
        event.preventDefault();
    }
  }
  onPaste(event) {
    event.preventDefault();
    let pasted = event.clipboardData ? event.clipboardData.getData("text") : "";
    const backend = event.target;
    pasted = this.expiresAutocompleteFix(backend, pasted);
    for (const letter of pasted)
      this.processKey({ key: letter }, backend);
  }
  onInput(event) {
    var _a;
    if (event.inputType == "insertReplacementText") {
      this.processKey({ key: "a", ctrlKey: true }, event.target);
      [...((_a = event.data) !== null && _a !== void 0 ? _a : "")].forEach(c => this.processKey({ key: c }, event.target));
    }
    else {
      const backend = event.target;
      let data = backend.value;
      if (data) {
        event.preventDefault();
        this.processKey({ key: "a", ctrlKey: true }, backend);
        data = this.expiresAutocompleteFix(backend, data);
        for (const letter of data)
          this.processKey({ key: letter }, backend);
      }
    }
  }
  expiresAutocompleteFix(backend, value) {
    var _a;
    if (((_a = backend.attributes.getNamedItem("autocomplete")) === null || _a === void 0 ? void 0 : _a.value) == "cc-exp")
      value = value.match(/^20\d\d[.\D]*\d\d$/)
        ? value.substring(value.length - 2, value.length) + value.substring(2, 4)
        : value.match(/^(1[3-9]|[2-9]\d)[.\D]*\d\d$/)
          ? value.substring(value.length - 2, value.length) + value.substring(0, 2)
          : value.match(/^\d\d[.\D]*20\d\d$/)
            ? value.substring(0, 2) + value.substring(value.length - 2, value.length)
            : value;
    return value;
  }
  processKey(event, backend) {
    const after = dist.Action.apply(this.formatter, this.state, event);
    this.updateBackend(after, backend);
  }
  updateBackend(after, backend) {
    if (after.value != backend.value)
      backend.value = after.value;
    if (backend.selectionStart != undefined && after.selection.start != backend.selectionStart)
      backend.selectionStart = after.selection.start;
    if (backend.selectionEnd != undefined && after.selection.end != backend.selectionEnd)
      backend.selectionEnd = after.selection.end;
    backend.selectionDirection = after.selection.direction ? after.selection.direction : backend.selectionDirection;
    this.state = after;
    this.value = this.lastValue = this.formatter.fromString(this.formatter.unformat(dist.StateEditor.copy(Object.assign({}, this.state))).value);
  }
  render() {
    var _a, _b, _c, _d, _e, _f, _g;
    return (h(Host, { class: { "has-value": ((_a = this.state) === null || _a === void 0 ? void 0 : _a.value) != undefined && ((_b = this.state) === null || _b === void 0 ? void 0 : _b.value) != "" }, onclick: () => { var _a; return (_a = this.inputElement) === null || _a === void 0 ? void 0 : _a.focus(); } }, h("div", null, h("input", { name: this.name, type: (_c = this.state) === null || _c === void 0 ? void 0 : _c.type, placeholder: this.placeholder, required: this.required, autocomplete: this.autocomplete ? (_d = this.state) === null || _d === void 0 ? void 0 : _d.autocomplete : "off", disabled: this.disabled, pattern: ((_e = this.state) === null || _e === void 0 ? void 0 : _e.pattern) && ((_f = this.state) === null || _f === void 0 ? void 0 : _f.pattern.source), value: (_g = this.state) === null || _g === void 0 ? void 0 : _g.value, onInput: (e) => this.onInput(e), onFocus: e => this.onFocus(e), onClick: e => this.onClick(e), onBlur: e => this.onBlur(e), onKeyDown: e => this.onKeyDown(e), ref: (el) => (this.inputElement = el), onPaste: e => this.onPaste(e) }), h("label", { htmlFor: this.name }, h("slot", null)), h("smoothly-icon", { name: "alert-circle", color: "danger", fill: "clear", size: "small" }))));
  }
  static get watchers() { return {
    "value": ["valueWatcher"],
    "currency": ["onCurrency"]
  }; }
};
function getLocale() {
  const result = navigator.language;
  return dist$1.Locale.is(result) ? result : dist$1.Language.is(result) ? dist$1.Locale.toLocale(result) : undefined;
}
SmoothlyInput.style = styleCss;

export { SmoothlyInput as smoothly_input };

//# sourceMappingURL=smoothly-input.entry.js.map