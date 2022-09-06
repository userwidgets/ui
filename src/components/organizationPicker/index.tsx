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
				.map(organizationId => ({ name: organizationId, value: organizationId })))
		console.log("this.key", this.key)
		console.log("this.organizations", this.organizations)
	}

	componentWillLoad() {
		state.me.listen("key", async key => (this.key = await key))
		console.log("key ", this.key)
		console.log("organization picker componentWillLoad")
	}

	@Listen("menuClose")
	handleMenuClose(event: CustomEvent<OptionType[]>) {
		event.stopPropagation()
		console.log("handleMenuClose state", state.options.organizationId)
		state.options = { organizationId: event.detail[0].value }
	}
	render() {
		return this.organizations ? (
			<smoothly-picker label="Organization" multiple={false} options={this.organizations}></smoothly-picker>
		) : (
			<div>
				<p>You are not a member of any organization.</p>
			</div>
		)
	}
}
