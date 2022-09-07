import { Component, h, Listen, Prop, State, Watch } from "@stencil/core"
import { OptionType } from "smoothly"
import { model } from "../../model"
import { Me } from "../../State"
import { Application } from "../../State/Application"
import { Listenable } from "../../State/Listenable"
import { Options } from "../../State/Options"
@Component({
	tag: "userwidgets-organization-picker",
	styleUrl: "style.css",
	scoped: true,
})
export class UserwidgetsOrganizationPicker {
	@Prop() state: {
		me: Me & Listenable<Me>
		application: Application & Listenable<Application>
		options: Options
	}
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
		this.organizations?.length && (this.state.options = { organizationId: this.organizations[0].value })
	}
	componentWillLoad() {
		this.state.me.listen("key", async key => (this.key = await key))
		this.state.application.listen("application", async application => (this.application = await application))
	}

	@Listen("menuClose")
	handleMenuClose(event: CustomEvent<OptionType[]>) {
		this.state.options = { organizationId: event.detail[0].value }
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
