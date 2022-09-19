import { Component, h, Prop } from "@stencil/core"
import { Listenable } from "../../../State/Listenable"
import { Users } from "../../../State/Users"

@Component({
	tag: "userwidgets-login-trigger",
	styleUrl: "style.css",
	scoped: true,
})
export class UserwidgetsLoginTrigger {
	@Prop() state: { users: Listenable<Users> & Users }
	componentWillLoad() {
		this.state.users.listen("users", () => undefined)
	}

	render() {
		return <p>Attempting to change name to trigger login</p>
	}
}
