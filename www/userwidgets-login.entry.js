import { r as registerInstance, h, k as Host } from './index-80daacae.js';
import { E as Error } from './client-f75125eb.js';
import { s as store } from './index-f43c9f9a.js';
import './index-5e02d811.js';

const styleCss = "";

const Login = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  async handleLogin(event) {
    var _a;
    event.preventDefault();
    const response = await store.me.login(event.detail);
    if (Error.is(response))
      this.error = response;
    else {
      (_a = this.resolve) === null || _a === void 0 ? void 0 : _a.call(this, true);
      this.resolve = undefined;
      this.error = undefined;
    }
  }
  async componentWillLoad() {
    store.me.listen("unauthorized", resolve => (this.resolve = resolve));
  }
  render() {
    return (h(Host, null, this.resolve ? h("userwidgets-login-dialog", null) : [], h("slot", null)));
  }
};
Login.style = styleCss;

export { Login as userwidgets_login };

//# sourceMappingURL=userwidgets-login.entry.js.map