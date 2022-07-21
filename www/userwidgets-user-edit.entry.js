import { r as registerInstance, i as createEvent, h } from './index-80daacae.js';

const styleCss = "";

const UserEdit = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.updated = createEvent(this, "updated", 7);
  }
  connectedCallback() {
    this.initialUser = structuredClone(this.user);
  }
  handleSubmit(event) {
    event.preventDefault();
    event.stopPropagation();
    console.log("SUBMITTED");
    this.updated.emit(this.user);
  }
  handleRevert() {
    this.user = structuredClone(this.initialUser);
  }
  render() {
    return (h("div", null, h("userwidgets-change-name", { name: this.user.name }), h("userwidgets-set-password", { user: this.user })));
  }
};
UserEdit.style = styleCss;

export { UserEdit as userwidgets_user_edit };

//# sourceMappingURL=userwidgets-user-edit.entry.js.map