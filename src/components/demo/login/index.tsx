import { Component, h } from "@stencil/core"
import { client } from "../../../client"

@Component({
	tag: "userwidgets-login-trigger",
	styleUrl: "style.css",
	scoped: true,
})
export class UserwidgetsLoginTrigger {
	componentWillLoad() {
		client.user.changeName("mail@example.com", { first: "mail", last: "example" }, "*")
	}
	render() {
		return <p>Attempting to change name to trigger login</p>
	}
}
