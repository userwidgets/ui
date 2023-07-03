import { Component, h, Host, Prop } from "@stencil/core"
import { State } from "../../../State"

@Component({
	tag: "userwidgets-demo-organization",
	styleUrl: "style.css",
	scoped: true,
})
export class UserwidgetsDemoOrganization {
	@Prop() state: State
	render() {
		return (
			<Host>
				<userwidgets-organization-picker state={this.state} />
			</Host>
		)
	}
}
