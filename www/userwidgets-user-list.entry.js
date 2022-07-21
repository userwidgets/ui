import { r as registerInstance, h } from './index-80daacae.js';
import { s as store } from './index-f43c9f9a.js';
import './client-f75125eb.js';
import './index-5e02d811.js';

const styleCss = "";

const UserList = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  componentWillLoad() {
    store.users.listen("changed", users => (users ? (this.users = users) : []));
  }
  handleUpdated(event) {
    event.stopPropagation();
    this.users[this.users.findIndex(user => user.email == event.detail.email)] = event.detail;
  }
  transform(users) {
    return {
      headings: ["User", "Email"],
      rows: users.map(user => ({
        cells: [`${user.name.first} ${user.name.last}`, user.email],
        detail: h("userwidgets-user-edit", { user: user }),
      })),
    };
  }
  render() {
    return (h("form", null, h("listing-component", { tableData: this.transform(this.users) })));
  }
};
UserList.style = styleCss;

export { UserList as userwidgets_user_list };

//# sourceMappingURL=userwidgets-user-list.entry.js.map