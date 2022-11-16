import { Component, h, Prop } from "@stencil/core"
import { model } from "../../../model"
import { Organization } from "../../../State"
import { Listenable } from "../../../State/Listenable"
import { Options } from "../../../State/Options"

interface StateInterface {
	organization: Organization & Listenable<Organization>
	options: Options
}

export type StateType = StateInterface & Listenable<StateInterface>

@Component({
	tag: "userwidgets-organization-user-remove",
	styleUrl: "style.css",
	scoped: true,
})
export class UserwidgetsOrganizationUserRemove {
	@Prop() state: StateType
	@Prop() user: model.userwidgets.User

	handleClick() {
		this.state.organization.removeUser(this.user.email)
	}

	render() {
		return (
			<form>
				<smoothly-button onClick={() => this.handleClick()}>Delete</smoothly-button>
			</form>
		)
	}
}
