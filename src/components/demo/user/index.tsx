import { Component, h, Host, Prop } from "@stencil/core"
import { State } from "../../../State"

@Component({
	tag: "userwidgets-demo-user",
	styleUrl: "style.css",
	scoped: true,
})
export class UserwidgetsDemoUser {
	@Prop() state: State
	render() {
		return (
			<Host>
				<userwidgets-user-list-member state={this.state} />
				<userwidgets-user-list-invited state={this.state} />
			</Host>
		)
	}
}
