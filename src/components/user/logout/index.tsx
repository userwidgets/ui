import { Component, ComponentWillLoad, Event, EventEmitter, h, Host } from "@stencil/core"
import { client } from "../../../client"

@Component({
	tag: "userwidgets-logout",
	styleUrl: "style.css",
	scoped: true,
})
export class Logout implements ComponentWillLoad {
	@Event() logout: EventEmitter
	componentWillLoad(): void | Promise<void> {
		sessionStorage.clear()
		client.key = undefined
		window.location.href = window.location.origin
	}
	render() {
		return <Host></Host>
	}
}
