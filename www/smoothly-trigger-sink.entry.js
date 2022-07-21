import { r as registerInstance, h } from './index-80daacae.js';
import { T as Trigger, M as Message } from './index-52596bb8.js';
import './GoogleFont-ed2dd269.js';

const styleCss = ".sc-smoothly-trigger-sink-h{display:block}[hidden].sc-smoothly-trigger-sink-h{display:none}";

const SmoothlyTriggerSink = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  get filters() {
    if (!this.filtersValue)
      this.filtersValue = this.filter ? this.filter.split(" ") : [];
    return this.filtersValue;
  }
  TriggerListener(event) {
    if (Trigger.is(event.detail) && this.filters.some(f => f == event.detail.name)) {
      Message.send(this.destination, event.detail, this.context || window);
      event.preventDefault();
      event.stopPropagation();
    }
  }
  render() {
    return h("slot", null);
  }
};
SmoothlyTriggerSink.style = styleCss;

export { SmoothlyTriggerSink as smoothly_trigger_sink };

//# sourceMappingURL=smoothly-trigger-sink.entry.js.map