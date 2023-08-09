import { Component, h, Host, Prop, State } from "@stencil/core"
import { userwidgets } from "@userwidgets/model"
import { model } from "../../model"

interface Change {
	name: string
	email: string
	permissions: userwidgets.User.Permissions
}
@Component({
	tag: "userwidgets-user",
	styleUrl: "style.css",
	scoped: true,
})
export class UserwidgetsUser {
	@Prop() state: model.State
	@Prop() user: userwidgets.User.Readable
	@State() change?: Partial<Change>
	// include langly translations here as well

	render() {
		return (
			<Host class={{ editing: !!this.change }}>
				<smoothly-form
					//events
					looks="grid">
					<smoothly-input
						name="name"
						readonly={!this.change}
						value={this.change ? this.change.name : this.user.name.first + " " + this.user.name.last}>
						Name
					</smoothly-input>
					<smoothly-input
						name="email"
						readonly={!this.change} //can we edit email? What happens then with the users userwidgets account?
						value={this.change ? this.change.email : this.user.email}>
						Email
					</smoothly-input>
				</smoothly-form>
			</Host>
		)
	}
}
