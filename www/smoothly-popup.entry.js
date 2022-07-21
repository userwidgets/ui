import { r as registerInstance, i as createEvent, h, k as Host } from './index-80daacae.js';

const styleCss = ".sc-smoothly-popup-h{display:inline-flex;position:relative}[hidden].sc-smoothly-popup-h{display:none}.sc-smoothly-popup-h:not([visible]) aside.sc-smoothly-popup{display:none}.sc-smoothly-popup-h aside.sc-smoothly-popup{display:inline;position:absolute;padding:0.3em;left:var(--left);right:var(--right);background-color:rgb(238, 238, 238);border-color:rgb(238, 238, 238);border-style:solid;border-width:0.1em;border-radius:0.6em;z-index:3}[direction=down].sc-smoothly-popup-h aside.sc-smoothly-popup{top:2.2em;box-shadow:6px 5px 9px -9px black, 5px 6px 9px -9px black}[direction=up].sc-smoothly-popup-h aside.sc-smoothly-popup{bottom:2.2em;box-shadow:-6px -5px 9px -9px black, -5px -6px 9px -9px black}.sc-smoothly-popup-h:not([visible]) .background.sc-smoothly-popup{display:none}.sc-smoothly-popup-h .background.sc-smoothly-popup{position:fixed;top:0;left:0;width:100vw;height:100vh;z-index:2}.sc-smoothly-popup-h:not([visible]) .arrow.sc-smoothly-popup{display:none}.sc-smoothly-popup-h .arrow.sc-smoothly-popup{background-color:rgb(238, 238, 238);border-color:rgb(238, 238, 238);z-index:2;content:\"\";position:absolute;width:12px;height:12px;transform:rotate(45deg);left:calc(var(--left) + 1em);right:calc(var(--right) + 1em)}[direction=down].sc-smoothly-popup-h .arrow.sc-smoothly-popup{top:2em;border-top-style:solid;border-top-width:1px;border-left-style:solid;border-left-width:1px}[direction=up].sc-smoothly-popup-h .arrow.sc-smoothly-popup{bottom:2em;border-bottom-style:solid;border-bottom-width:1px;border-right-style:solid;border-right-width:1px}.sc-smoothly-popup-h .pointer.sc-smoothly-popup{cursor:pointer}";

const SmoothlyPopup = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.popup = createEvent(this, "popup", 7);
    this.visible = false;
    this.direction = "down";
    this.cssVariables = { "--left": "0.1em" };
  }
  onClick() {
    var _a, _b, _c, _d, _e, _f;
    if (this.visible == false) {
      (_a = this.aside) === null || _a === void 0 ? void 0 : _a.style.setProperty("display", "block");
      this.cssVariables =
        ((_c = (_b = this.aside) === null || _b === void 0 ? void 0 : _b.getBoundingClientRect().right) !== null && _c !== void 0 ? _c : 0) >= window.innerWidth
          ? { "--right": "0.1em" }
          : ((_e = (_d = this.aside) === null || _d === void 0 ? void 0 : _d.getBoundingClientRect().left) !== null && _e !== void 0 ? _e : 0) < 0
            ? { "--left": "0.1em" }
            : this.cssVariables;
      (_f = this.aside) === null || _f === void 0 ? void 0 : _f.style.removeProperty("display");
    }
    this.visible = !this.visible;
    this.popup.emit(this.visible);
  }
  render() {
    return (h(Host, { style: Object.assign({}, this.cssVariables) }, h("content", { class: "pointer", onClick: () => this.onClick() }, h("slot", null)), h("div", { class: "background", onClick: () => this.onClick() }), h("div", { class: "arrow", onClick: () => this.onClick() }), h("aside", { ref: el => (this.aside = el) }, h("slot", { name: "popup" }))));
  }
};
SmoothlyPopup.style = styleCss;

export { SmoothlyPopup as smoothly_popup };

//# sourceMappingURL=smoothly-popup.entry.js.map