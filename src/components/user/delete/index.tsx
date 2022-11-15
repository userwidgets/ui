import { Component, h } from "@stencil/core"

@Component({
	tag: "userwidgets-user-delete",
	styleUrl: "style.css",
	scoped: true,
})
export class UserwidgetsUserDelete {
	render() {
		return <smoothly-button onClick={() => console.log("delete")}>Delete</smoothly-button>
	}
}
