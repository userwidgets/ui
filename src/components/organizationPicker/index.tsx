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
	// @Prop() location:
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
		state.options = { organizationId: event.detail[0].value } // not pretty but the length of event.detail should = 1 because picker multiple=false
		window.location.href = window.origin // you only get one chance
	}

	render() {
		return this.organizations ? (
			<div>
				<smoothly-picker label="Organization" multiple={false} options={this.organizations}></smoothly-picker>
				<p>
					Choose <a href={window.origin}> organization</a>{" "}
					{/* this wont be necessary. The table should rerender with correct data immediately*/}
				</p>
			</div>
		) : (
			<div>
				<p>You are not a member of any organization.</p>
			</div>
		)
		// if (this.key) {
		// 	const organizations = Object.keys(this.key.permissions)
		// 		.filter(([organizationId]) => organizationId != "*")
		// 		.map(organizationId => ({ name: organizationId, value: organizationId }))

		// 	state.options.organizationId = organizations[0].value
		// 	result =
		// 		organizations.length != 0 ? null : (
		// 			<div>
		// 				<smoothly-picker label="Organization" multiple={false} options={organizations}></smoothly-picker>
		// 				<p>
		// 					Choose <a href={window.origin}> organization</a>
		// 				</p>
		// 			</div>
		// 		)
		// } else
		// 	result = "testing"

		// return result
	}
}
