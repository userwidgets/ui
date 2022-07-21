import { r as registerInstance, i as createEvent, h } from './index-80daacae.js';
import { c as client, E as Error } from './client-f75125eb.js';
import './index-e8364687.js';
import './index-14e89b75.js';
import { U as User } from './index-5e02d811.js';
import { N as Notice } from './index-52596bb8.js';
import './App-4328cdd3.js';
import './GoogleFont-ed2dd269.js';

const styleCss = "";

const SetPassword = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.notice = createEvent(this, "notice", 7);
  }
  handleSmoothlyChanged(event) {
    event.detail.name == "new" ? (this.new = event.detail.value) : (this.repeat = event.detail.value);
  }
  async handleSmoothlySubmit(event) {
    event.preventDefault();
    event.stopPropagation();
    const passwords = Object.fromEntries(new FormData(event.target));
    if (!User.Password.Change.is(passwords))
      this.notice.emit(Notice.warn("Missing fields."));
    else if (passwords.new != passwords.repeat)
      this.notice.emit(Notice.warn("New password was not repeated correctly."));
    else {
      const response = await client.user.changePassword(this.user.email, passwords);
      if (Error.is(response)) {
        this.notice.emit(Notice.warn(response.body));
      }
    }
  }
  render() {
    return (h("from", null, h("smoothly-input", { type: "password", name: "new", value: this.new }), h("smoothly-input", { type: "password", name: "repeat", value: this.repeat }), h("smoothly-submit", { disabled: this.new != this.repeat || this.new.length == 0 })));
  }
};
SetPassword.style = styleCss;

export { SetPassword as userwidgets_set_password };

//# sourceMappingURL=userwidgets-set-password.entry.js.map