import { Component, h, Listen, Prop, State, Watch } from "@stencil/core"
import { Option } from "smoothly"
import { model } from "../../../model"

@Component({
	tag: "userwidgets-organization-picker",
	styleUrl: "style.css",
	scoped: true,
})
export class UserwidgetsOrganizationPicker {
	@Prop() state: model.State
	@State() key?: model.userwidgets.User.Key
	@State() application?: model.userwidgets.Application
	@State() organizations?: { name: string; value: string }[]
	@State() receivedKey?: (value: boolean) => void
	@Watch("key")
	handleKeyChange() {
		;(!this.key || !this.application) &&
			this.state.application.listen("application", async promise => {
				const application = await promise
				this.application = application ? application : undefined
			})
	}

	@Watch("application")
	handelApplicationChange() {
		this.application?.organizations &&
			(this.organizations = Object.values(this.application.organizations)
				.sort(({ permissions: a }, { permissions: b }) => Object.keys(b).length - Object.keys(a).length)
				.map(({ name, id }) => ({
					name: name,
					value: id,
				})))
		this.organizations?.length && (this.state.options = { organizationId: this.organizations[0].value })
	}
	componentWillLoad() {
		new Promise(resolve => (this.receivedKey = resolve)).then(() => {
			this.state.application.listen("application", async promise => {
				const application = await promise
				this.application = application ? application : undefined
			})
		})
		this.state.me.listen("key", async promise => {
			const key = await promise
			;(this.key = key ? key : undefined) && this.receivedKey && this.receivedKey(true)
		})
	}

	@Listen("menuClose")
	handleMenuClose(event: CustomEvent<Option[]>) {
		this.state.options = { organizationId: event.detail[0].value }
		event.stopPropagation()
	}
	render() {
		return this.key ? (
			<smoothly-picker
				label="Organization"
				multiple={false}
				options={this.organizations}
				selections={
					!this.organizations?.length
						? [{ name: "You are not a member of any organization", value: "" }]
						: [this.organizations[0]]
				}></smoothly-picker>
		) : null
	}
}
