import { r as registerInstance, i as createEvent, h } from './index-80daacae.js';
import './index-e8364687.js';
import './index-14e89b75.js';
import { U as User } from './index-5e02d811.js';
import { N as Notice } from './index-52596bb8.js';
import './App-4328cdd3.js';
import './GoogleFont-ed2dd269.js';

const styleCss = ".sc-userwidgets-login-dialog-h{display:flex;justify-content:center;align-items:center;flex-direction:column;padding:0 1em;height:100%}.background.sc-userwidgets-login-dialog{background-color:rgba(255, 255, 255, 0.55)}.page.sc-userwidgets-login-dialog{position:absolute;width:100%;z-index:100;height:100%;top:0;left:0;right:0}.viewport.sc-userwidgets-login-dialog{position:sticky;display:flex;justify-content:center;align-items:center;height:100vh;top:0;width:100%}form.sc-userwidgets-login-dialog{margin:0 auto;display:flex;flex-direction:column;gap:1em;padding:2em;max-width:500px;border:1px solid black;width:100%}smoothly-input.sc-userwidgets-login-dialog{border-bottom:1px solid black}smoothly-submit.sc-userwidgets-login-dialog{border:none}smoothly-submit.sc-userwidgets-login-dialog>button.sc-userwidgets-login-dialog{width:100%}.button.sc-smoothly-submit.sc-userwidgets-login-dialog{width:100%}";

const Login = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.notice = createEvent(this, "notice", 7);
    this.login = createEvent(this, "login", 7);
  }
  async handleSubmit(event) {
    event.preventDefault();
    const credentials = Object.fromEntries(new FormData(event.target));
    if (!User.Credentials.is(credentials)) {
      console.log("missing email or pw");
      this.notice.emit(Notice.warn("Both email and password is required to login."));
    }
    else if (!credentials.user.match(/^\S+@\S+$/)) {
      console.log("not an email");
      this.notice.emit(Notice.warn("Provided email is not an email."));
    }
    else
      this.login.emit(credentials);
  }
  render() {
    return (h("div", { class: "page background" }, h("div", { class: "viewport background" }, h("form", null, h("smoothly-input", { type: "email", name: "user" }, "Email"), h("smoothly-input", { type: "password", name: "password" }, "Password"), h("smoothly-submit", null, "Login"), h("p", null, "Do you not have an account? ", h("a", { href: "/register" }, "Create a new account"))))));
  }
};
Login.style = styleCss;

export { Login as userwidgets_login_dialog };

//# sourceMappingURL=userwidgets-login-dialog.entry.js.map