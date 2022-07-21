import { r as registerInstance, i as createEvent, h, k as Host } from './index-80daacae.js';
import { c as client } from './client-f75125eb.js';
import './index-5e02d811.js';

const styleCss = "";

const Logout = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.logout = createEvent(this, "logout", 7);
  }
  componentWillLoad() {
    sessionStorage.clear();
    client.key = undefined;
    window.location.href = window.location.origin;
  }
  render() {
    return h(Host, null);
  }
};
Logout.style = styleCss;

export { Logout as userwidgets_logout };

//# sourceMappingURL=userwidgets-logout.entry.js.map