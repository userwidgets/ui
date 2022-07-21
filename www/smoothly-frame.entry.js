import { r as registerInstance, i as createEvent, h, j as getElement } from './index-80daacae.js';
import { M as Message, T as Trigger } from './index-52596bb8.js';
import './GoogleFont-ed2dd269.js';

const styleCss = ".sc-smoothly-frame-h{display:block;width:100%;height:100%}[hidden].sc-smoothly-frame-h{display:none}.sc-smoothly-frame-h>iframe.sc-smoothly-frame{border:none;padding:none;margin:none}";

const SmoothlyFrame = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.trigger = createEvent(this, "trigger", 7);
    this.message = createEvent(this, "message", 7);
  }
  get contentWindow() {
    const iframe = this.element && this.element.firstElementChild ? this.element.firstElementChild : undefined;
    return (iframe && iframe.contentWindow) || undefined;
  }
  get defaultOrigin() {
    const match = this.url.match(/^(([a-z]+\+)*[a-z]+:\/\/)?[^/^\n]+/);
    return match ? match[0] : "*";
  }
  componentDidLoad() {
    var _a;
    if (this.contentWindow)
      Message.listen((_a = this.origin) !== null && _a !== void 0 ? _a : this.defaultOrigin, (destination, content) => {
        if (destination == this.name)
          if (Trigger.is(content))
            this.trigger.emit(content);
          else
            this.message.emit({ destination, content });
      }, window);
  }
  async send(message, content) {
    var _a, _b;
    if (typeof message == "string")
      Message.send(((_a = this.origin) !== null && _a !== void 0 ? _a : this.defaultOrigin) + "#" + message, content, this.contentWindow);
    else if (Message.is(message) && this.contentWindow)
      Message.send({ destination: ((_b = this.origin) !== null && _b !== void 0 ? _b : this.defaultOrigin) + "#" + message.destination, content: message.destination }, this.contentWindow);
  }
  render() {
    return h("iframe", { src: this.url + "#" + window.location.origin, height: "100%", width: "100%" });
  }
  get element() { return getElement(this); }
};
SmoothlyFrame.style = styleCss;

export { SmoothlyFrame as smoothly_frame };

//# sourceMappingURL=smoothly-frame.entry.js.map