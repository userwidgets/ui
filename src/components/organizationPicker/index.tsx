import { Component, h, Listen, Prop, State, Watch } from "@stencil/core"
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
	@Prop({ mutable: true, reflect: true }) menuOpen = false
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
	handleClick() {
		console.log("handeClick")
		this.menuOpen = !this.menuOpen
	}

	render() {
		return this.organizations ? (
			<div>
				<smoothly-button fill="solid" color="primary" onClick={() => this.handleClick()}>
					<smoothly-icon name="menu"></smoothly-icon>
				</smoothly-button>
				<smoothly-picker
					label="Organization"
					multiple={false}
					options={this.organizations}
					class={this.menuOpen ? "open" : "closed"}></smoothly-picker>
			</div>
		) : (
			<div>
				<p>You are not a member of any organization.</p>
			</div>
		)
	}
}
