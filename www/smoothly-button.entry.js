import { r as registerInstance, h } from './index-80daacae.js';

const styleCss = "[type=link].sc-smoothly-button-h{display:inline}.sc-smoothly-button-h:not([type=link]){display:block}.sc-smoothly-button-h{margin:1em;border-style:solid;border-width:1px;border-radius:3px}[hidden].sc-smoothly-button-h{display:none}[disabled].sc-smoothly-button-h{opacity:0.5}a.sc-smoothly-button,button.sc-smoothly-button{border-color:transparent;background-color:transparent;padding:0.2em 0.3em;font-size:110%;font-weight:400}.sc-smoothly-button-h:not([disabled]):hover,.sc-smoothly-button-h:not([disabled]):focus,.sc-smoothly-button-h:not([disabled]):active{border-color:var(--smoothly-button-border)}[type=button].sc-smoothly-button-h>a.sc-smoothly-button{display:block;text-align:center;text-decoration:inherit}[type=button].sc-smoothly-button-h>a.sc-smoothly-button{width:calc(100% - 0.6em)}.sc-smoothly-button-h>button.sc-smoothly-button{width:100%}[expand=fill].sc-smoothly-button-h{width:100%;border-left:none;border-right:none}";

const SmoothlyButton = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.disabled = false;
    this.type = "button";
  }
  render() {
    let result;
    switch (this.type) {
      case "link":
        result = this.disabled ? (h("slot", null)) : (h("a", { href: this.link }, h("slot", null)));
        break;
      case "button":
        result = this.link ? (h("a", { href: this.link, target: "_blank", download: this.download }, h("slot", null))) : (h("button", { disabled: this.disabled }, h("slot", null)));
        break;
    }
    return result;
  }
};
SmoothlyButton.style = styleCss;

export { SmoothlyButton as smoothly_button };

//# sourceMappingURL=smoothly-button.entry.js.map