import { r as registerInstance, h, k as Host } from './index-80daacae.js';
import { T as Trigger } from './index-52596bb8.js';
import './GoogleFont-ed2dd269.js';

const styleCss = ".sc-smoothly-dialog-h{display:block;position:fixed;left:0;top:0;width:100%;height:100%;z-index:1;background:rgba(var(--smoothly-default-color), var(--smoothly-semitransparent)) !important}[hidden].sc-smoothly-dialog-h{display:none}.sc-smoothly-dialog-h>header.sc-smoothly-dialog{border-top-left-radius:8px;border-top-right-radius:8px;margin-top:2em;color:rgb(var(--smoothly-primary-contrast));background:rgb(var(--smoothly-primary-color));border-color:rgb(var(--smoothly-primary-color))}.sc-smoothly-dialog-h:not([header]) header.sc-smoothly-dialog{border:none}.sc-smoothly-dialog-h>*.sc-smoothly-dialog{position:relative;color:rgb(var(--smoothly-default-contrast));background-color:rgb(var(--smoothly-default-color));border-color:rgb(var(--smoothly-color));border-width:1px;border-style:solid;max-width:40em;width:calc(100vw - 4em - 2px);max-height:calc(100vh - 6em - 2px);height:auto;margin-left:auto;margin-right:auto;border-collapse:collapse}.sc-smoothly-dialog-h>main.sc-smoothly-dialog{border-bottom-left-radius:8px;border-bottom-right-radius:8px;margin-bottom:2em;border:1px solid rgb(var(--smoothly-default-contrast));box-sizing:border-box;overflow:hidden}.sc-smoothly-dialog-h:not([header]) main.sc-smoothly-dialog{border-radius:8px}.sc-smoothly-dialog-h>*.sc-smoothly-dialog>smoothly-trigger.sc-smoothly-dialog{position:absolute;right:-2em;top:-2em;z-index:1;border-color:transparent}.sc-smoothly-dialog-h>*.sc-smoothly-dialog>smoothly-trigger.sc-smoothly-dialog:hover{border-color:transparent}.sc-smoothly-dialog-h smoothly-icon.sc-smoothly-dialog{background-color:rgb(var(--smoothly-color));border-radius:50%}.sc-smoothly-dialog-h>*.sc-smoothly-dialog>*.sc-smoothly-dialog{margin:10px}";

const SmoothlyDialog = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.open = true;
    this.closable = false;
  }
  TriggerListener(event) {
    if (Trigger.is(event.detail) && event.detail.name == "close")
      this.open = false;
  }
  hostData() {
    return {
      style: {
        display: this.open ? "block" : "none",
      },
    };
  }
  __stencil_render() {
    return [
      h("header", null, this.closable ? (h("smoothly-trigger", { fill: "clear", name: "close" }, h("smoothly-icon", { name: "close-circle", fill: "solid", color: this.color }))) : ([]), this.header ? h("h1", null, this.header) : h("slot", { name: "header" })),
      h("main", null, h("slot", null)),
    ];
  }
  render() { return h(Host, this.hostData(), this.__stencil_render()); }
};
SmoothlyDialog.style = styleCss;

export { SmoothlyDialog as smoothly_dialog };

//# sourceMappingURL=smoothly-dialog.entry.js.map