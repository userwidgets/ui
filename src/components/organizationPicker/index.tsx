import { Component, h, Listen, State, Watch } from "@stencil/core"
import { OptionType } from "smoothly"
import { model } from "../../model"
import { state } from "../../State"

@Component({
	tag: "userwidgets-organization-picker",
	styleUrl: "style.css",
	scoped: true,
})
export class UserwidgetsOrganizationPicker {
	@State() key?: model.userwidgets.User.Key
	@State() organizations?: { name: string; value: string }[]
	@Watch("key")
	handelKey() {
		this.key &&
			(this.organizations = Object.keys(this.key.permissions)
				.filter(([organizationId]) => organizationId != "*")
				.map(organizationId => ({ name: organizationId, value: organizationId }))) &&
			(state.options = { organizationId: this.organizations[0].value })
	}

	componentWillLoad() {
		state.me.listen("key", async key => (this.key = await key))
	}

	@Listen("menuClose")
	handleMenuClose(event: CustomEvent<OptionType[]>) {
		event.stopPropagation()
		state.options = { organizationId: event.detail[0].value }
	}
	render() {
		return (
			<smoothly-picker
				label="Organization"
				multiple={false}
				options={this.organizations}
				selections={
					!this.organizations
						? [{ name: "you are not a member of any organization", value: "" }]
						: [this.organizations[0]]
				}></smoothly-picker>
		)
	}
}
