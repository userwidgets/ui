import { Component, h } from "@stencil/core"

@Component({
	tag: "userwidgets-user-status",
	styleUrl: "style.css",
	scoped: true,
})
export class UserwidgetsUserStatus {
	render() {
		return [<span>Status:</span>]
	}
}
