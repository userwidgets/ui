import { Component, h } from "@stencil/core"

@Component({
	tag: "userwidgets-organization-user-reinvite",
	styleUrl: "style.css",
	scoped: true,
})
export class UserwidgetsOrganizationUserReinvite {
	handleClick() {
		console.log("not implemented")
	}
	render() {
		return (
			<smoothly-form>
				<smoothly-button class={"button"} onClick={() => this.handleClick()}>
					<slot></slot>
				</smoothly-button>
			</smoothly-form>
		)
	}
}
