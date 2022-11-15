import { Component, h } from "@stencil/core"

@Component({
	tag: "userwidgets-organization-user-delete",
	styleUrl: "style.css",
	scoped: true,
})
export class UserwidgetsOrganizationUserDelete {
	render() {
		return <smoothly-button onClick={() => console.log("delete")}>Delete</smoothly-button>
	}
}
