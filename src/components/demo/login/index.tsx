import { Component, h, Prop } from "@stencil/core"
import { model } from "../../../model"

@Component({
	tag: "userwidgets-login-trigger",
	styleUrl: "style.css",
	scoped: true,
})
export class UserwidgetsLoginTrigger {
	@Prop() state: model.State
	componentWillLoad() {
		this.state.user.listen("users", () => undefined)
	}

	render() {
		return <p>Attempting to change name to trigger login</p>
	}
}
