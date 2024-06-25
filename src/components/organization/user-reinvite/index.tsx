import { Component, h } from "@stencil/core"

@Component({
	tag: "userwidgets-organization-user-reinvite",
	styleUrl: "style.css",
	scoped: true,
})
export class UserwidgetsOrganizationUserReinvite {
	render() {
		return (
			<smoothly-form looks="line">
				<smoothly-button>
					<slot></slot>
				</smoothly-button>
			</smoothly-form>
		)
	}
}
