import { Component, h, State } from "@stencil/core"
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

	componentWillLoad() {
		state.me.listen("key", async key => (this.key = await key))
		console.log("organization picker componentWillLoad")
	}
	handleMenuClose(event: CustomEvent<OptionType[]>) {
		event.stopPropagation()
		state.options.organizationId = event.detail[0].value // not pretty but the length of event.detail should = 1.because picker multiple=false
		window.location.href = window.origin // you only get one chance
	}
	render() {
		let result: any
		if (this.key) {
			const organizations = Object.keys(this.key.permissions)
				.filter(([organizationId]) => organizationId != "*")
				.map(organizationId => ({ name: organizationId, value: organizationId }))

			state.options.organizationId = organizations[0].value
			result =
				organizations.length != 0 ? null : (
					<smoothly-picker label="Organization" multiple={false} options={organizations}></smoothly-picker>
					// probably going to need a submit button to actually close the window
				)
		} else
			result = "testing"

		return result
	}
}
