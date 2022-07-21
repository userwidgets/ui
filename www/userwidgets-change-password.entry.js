import { r as registerInstance, i as createEvent, h } from './index-80daacae.js';
import { c as client, E as Error } from './client-f75125eb.js';
import './index-e8364687.js';
import './index-14e89b75.js';
import { s as store } from './index-f43c9f9a.js';
import { U as User } from './index-5e02d811.js';
import { N as Notice } from './index-52596bb8.js';
import './App-4328cdd3.js';
import './GoogleFont-ed2dd269.js';

const styleCss = "";

const ChangePassword = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.notice = createEvent(this, "notice", 7);
  }
  async componentWillLoad() {
    store.me.listen("changed", key => (this.key = key));
  }
  async handleSubmit(event) {
    event.preventDefault();
    event.stopPropagation();
    const passwords = Object.fromEntries(new FormData(event.target));
    if (!User.Password.Change.is(passwords))
      this.notice.emit(Notice.failed("Missing fields."));
    else if (passwords.new != passwords.repeat)
      this.notice.emit(Notice.failed("New password was not repeated correctly."));
    else {
      const key = await client.fullKey;
      if (key) {
        this.notice.emit(Notice.execute("Changing password.", async () => {
          const response = await client.user.changePassword(key.email, passwords);
          return Error.is(response) ? [false, "Failed to change password."] : [true, "Password changed"];
        }));
      }
    }
  }
  render() {
    var _a;
    return (h("form", null, "Change password for user ", h("code", null, (_a = this.key) === null || _a === void 0 ? void 0 : _a.email), h("smoothly-input", { name: "old", type: "password" }, "Old password"), h("smoothly-input", { name: "new", type: "password" }, "New password"), h("smoothly-input", { name: "repeat", type: "password" }, "Repeat password"), h("smoothly-submit", null, "Change password")));
  }
};
ChangePassword.style = styleCss;

export { ChangePassword as userwidgets_change_password };

//# sourceMappingURL=userwidgets-change-password.entry.js.map