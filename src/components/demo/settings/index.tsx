import { Component, h, Host, Prop } from "@stencil/core"
import { model } from "../../../model"

@Component({
	tag: "userwidgets-demo-settings",
	styleUrl: "style.css",
	scoped: true,
})
export class UserwidgetsDemoSettings {
	@Prop() state: model.State

	render() {
		return (
			<Host>
				<userwidgets-me-name state={this.state} />
				<userwidgets-password-change state={this.state} />
			</Host>
		)
	}
}
