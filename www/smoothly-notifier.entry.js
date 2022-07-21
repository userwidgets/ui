import { r as registerInstance, h } from './index-80daacae.js';

const styleCss = ".sc-smoothly-notifier-h{display:block}[hidden].sc-smoothly-notifier-h{display:none}.sc-smoothly-notifier-h>aside.sc-smoothly-notifier{display:flex;flex-wrap:wrap-reverse;align-content:stretch;justify-content:flex-start;position:fixed;bottom:3em;left:0;text-align:center;width:100%;z-index:100}";

const Notifier = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.notices = [];
  }
  onNotice(event) {
    this.notices = [...this.notices, event.detail];
  }
  onRemove(event) {
    this.notices = [...this.notices.filter(n => n != event.detail)];
  }
  render() {
    return [
      h("slot", null),
      h("aside", null, this.notices.map(n => (h("smoothly-notification", { notice: n })))),
    ];
  }
};
Notifier.style = styleCss;

export { Notifier as smoothly_notifier };

//# sourceMappingURL=smoothly-notifier.entry.js.map