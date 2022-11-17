import { Component, ComponentWillLoad, h, Prop, State } from "@stencil/core"
import { model } from "../../../model"
import { Organization } from "../../../State"
import { Listenable } from "../../../State/Listenable"
import { Options } from "../../../State/Options"

interface StateInterface {
	options: Options
	organization: Organization & Listenable<Organization>
}

export type StateType = StateInterface & Listenable<StateInterface>

@Component({
	tag: "userwidgets-user-status",
	styleUrl: "style.css",
	scoped: true,
})
export class UserwidgetsUserStatus implements ComponentWillLoad {
	@Prop() state: StateType
	@Prop() user: model.userwidgets.User.Readable
	@State() organizations?: model.userwidgets.Organization[]
	@State() organizationId?: string
	componentWillLoad(): void | Promise<void> {
		this.state.organization.listen("organizations", async promise => {
			const organizations = await promise
			this.organizations = !organizations ? undefined : organizations
		})
		this.state.listen("options", options => (this.organizationId = options.organizationId))
	}

	render() {
		return [
			<span>Status:</span>,
			this.organizations
				?.find(organization => organization.id == this.organizationId)
				?.users.includes(this.user.email) ? (
				<span>Active</span>
			) : (
				<span>Inactive</span>
			),
		]
	}
}
