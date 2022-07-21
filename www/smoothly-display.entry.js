import { r as registerInstance, h } from './index-80daacae.js';
import { d as dist$1 } from './index-24ec0bc5.js';
import { d as dist } from './index-f74896ed.js';

const styleCss = ".sc-smoothly-display-h{display:block}[hidden].sc-smoothly-display-h{display:none}";

const SmoothlyDisplay = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    var _a;
    let result;
    const type = this.type;
    switch (type) {
      default:
        result = dist.format(this.value, type);
        break;
      case "email":
        result = h("a", { href: "mailto:" + this.value }, dist.format(this.value, type));
        break;
      case "phone":
        result = h("a", { href: "tel:" + this.value }, dist.format(this.value, type, this.country));
        break;
      case "postal-code":
        result = dist.format(this.value, type, this.country);
        break;
      case "price":
        result = dist.format(this.value, type, this.currency);
        break;
      case "date":
        result = (_a = dist.get(this.type, getLocale())) === null || _a === void 0 ? void 0 : _a.toString(this.value);
        break;
    }
    return result;
  }
};
function getLocale() {
  const result = navigator.language;
  return dist$1.Locale.is(result) ? result : dist$1.Language.is(result) ? dist$1.Locale.toLocale(result) : undefined;
}
SmoothlyDisplay.style = styleCss;

export { SmoothlyDisplay as smoothly_display };

//# sourceMappingURL=smoothly-display.entry.js.map