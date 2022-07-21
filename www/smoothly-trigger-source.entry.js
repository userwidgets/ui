import { r as registerInstance, i as createEvent, h, j as getElement } from './index-80daacae.js';
import { M as Message, T as Trigger } from './index-52596bb8.js';
import './GoogleFont-ed2dd269.js';

const styleCss = ".sc-smoothly-trigger-source-h{display:block}[hidden].sc-smoothly-trigger-source-h{display:none}";

const SmoothlyTriggerSource = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.trigger = createEvent(this, "trigger", 7);
    this.message = createEvent(this, "message", 7);
  }
  componentDidLoad() {
    Message.listen(this.listen, (destination, content) => {
      if (Trigger.is(content))
        this.trigger.emit(content);
      else
        this.message.emit({ destination, content });
    }, window);
  }
  render() {
    return h("slot", null);
  }
  get element() { return getElement(this); }
};
SmoothlyTriggerSource.style = styleCss;

export { SmoothlyTriggerSource as smoothly_trigger_source };

//# sourceMappingURL=smoothly-trigger-source.entry.js.map