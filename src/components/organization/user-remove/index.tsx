import { Component, h, Prop } from "@stencil/core"
import { model } from "../../../model"

@Component({
	tag: "userwidgets-organization-user-remove",
	styleUrl: "style.css",
	scoped: true,
})
export class UserwidgetsOrganizationUserRemove {
	@Prop() state: model.State
	@Prop() user: model.userwidgets.User.Readable

	handleClick() {
		this.state.organization.removeUser(this.user.email)
	}

	render() {
		return (
			<form onSubmit={event => event.preventDefault()}>
				<smoothly-button class={"button"} onClick={() => this.handleClick()}>
					<slot></slot>
				</smoothly-button>
			</form>
		)
	}
}
