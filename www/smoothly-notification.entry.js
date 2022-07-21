import { r as registerInstance, i as createEvent, h, k as Host } from './index-80daacae.js';

const styleCss = ".sc-smoothly-notification-h{display:block;min-width:32.6%;min-height:3em;border-radius:5px;margin:0.5em}[hidden].sc-smoothly-notification-h{display:none}smoothly-trigger.sc-smoothly-notification{float:right;text-align:right;margin-right:0.2em}";

const Notification = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.remove = createEvent(this, "remove", 7);
    this.tick = {};
    this.listener = notice => {
      console.log("changed: ", notice);
      if (notice.state == "closed")
        this.remove.emit(notice);
      else
        this.tick = {};
    };
  }
  get color() {
    let result;
    switch (this.notice.state) {
      case "delayed":
      case "warning":
        result = "warning";
        break;
      case "success":
        result = "success";
        break;
      case "executing":
        result = "light";
        break;
      case "failed":
        result = "danger";
        break;
      default:
        result = "light";
        break;
    }
    return result;
  }
  onTrigger(event) {
    if (event.detail.name == "close") {
      event.stopPropagation();
      this.notice.close();
    }
  }
  onUpdatedNotice(newValue, oldValue) {
    if (oldValue)
      oldValue.unlisten(this.listener);
    newValue.listen(this.listener);
  }
  componentDidLoad() {
    this.onUpdatedNotice(this.notice);
  }
  render() {
    return (h(Host, { color: this.color, fill: "solid" }, h("smoothly-trigger", { fill: "clear", name: "close" }, h("smoothly-icon", { name: "close-circle-outline" })), h("p", null, this.notice.message)));
  }
  static get watchers() { return {
    "notice": ["onUpdatedNotice"]
  }; }
};
Notification.style = styleCss;

export { Notification as smoothly_notification };

//# sourceMappingURL=smoothly-notification.entry.js.map