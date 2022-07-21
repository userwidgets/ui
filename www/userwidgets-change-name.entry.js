import { r as registerInstance, i as createEvent, h } from './index-80daacae.js';
import { c as client, E as Error } from './client-f75125eb.js';
import './index-e8364687.js';
import './index-14e89b75.js';
import { U as User } from './index-5e02d811.js';
import { N as Notice } from './index-52596bb8.js';
import './App-4328cdd3.js';
import './GoogleFont-ed2dd269.js';

const styleCss = "";

const ChangeName = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.notice = createEvent(this, "notice", 7);
    this.changed = false;
  }
  connectedCallback() {
    this.initialName = this.name;
  }
  handleInputChanged(event) {
    this.name[event.detail.name] = event.detail.value;
    this.changed = this.name.first == this.initialName.first && this.name.last == this.initialName.last ? false : true;
  }
  async handleSubmit(event) {
    event.preventDefault();
    event.stopPropagation();
    const name = Object.fromEntries(new FormData(event.target));
    if (!User.Name.is(name))
      this.notice.emit(Notice.warn("Missing fields."));
    else if (!(this.name.first == this.initialName.first && this.name.last == this.initialName.last))
      this.notice.emit(Notice.warn("Names are not changed."));
    else {
      const response = await client.user.changeName("", name);
      if (Error.is(response))
        this.notice.emit(Notice.warn(response.body));
    }
  }
  render() {
    return (h("form", null, h("smoothly-input", { name: "first", type: "text" }, this.name.first), h("smoothly-input", { name: "last", type: "text" }, this.name.last), h("smoothly-submit", { disabled: !this.changed }, "Change name")));
  }
};
ChangeName.style = styleCss;

export { ChangeName as userwidgets_change_name };

//# sourceMappingURL=userwidgets-change-name.entry.js.map