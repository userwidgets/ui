import { Component, h, Prop } from "@stencil/core"
import { Listenable } from "../../../State/Listenable"
import { User } from "../../../State/User"

@Component({
	tag: "userwidgets-login-trigger",
	styleUrl: "style.css",
	scoped: true,
})
export class UserwidgetsLoginTrigger {
	@Prop() state: { user: Listenable<User> & User }
	componentWillLoad() {
		this.state.user.listen("users", () => undefined)
	}

	render() {
		return <p>Attempting to change name to trigger login</p>
	}
}
