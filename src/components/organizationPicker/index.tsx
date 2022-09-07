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
	@State() application?: model.userwidgets.Application
	@Watch("application")
	handelApplicationChange() {
		this.application?.organizations &&
			(this.organizations = Object.values(this.application.organizations).map(({ name, id }) => ({
				name: name,
				value: id,
			})))
	}
	componentWillLoad() {
		state.me.listen("key", async key => (this.key = await key))
		state.application.listen("application", async application => (this.application = await application))
	}

	@Listen("menuClose")
	handleMenuClose(event: CustomEvent<OptionType[]>) {
		state.options = { organizationId: event.detail[0].value }
		event.stopPropagation()
	}
	render() {
		return (
			<smoothly-picker
				label="Organization"
				multiple={false}
				options={this.organizations}
				selections={
					!this.organizations?.length
						? [{ name: "you are not a member of any organization", value: "" }]
						: [this.organizations[0]]
				}></smoothly-picker>
		)
	}
}
