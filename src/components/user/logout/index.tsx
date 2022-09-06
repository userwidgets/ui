import { Component, Event, EventEmitter, h } from "@stencil/core"
import { state } from "../../../State"

@Component({
	tag: "userwidgets-logout",
	styleUrl: "style.css",
	scoped: true,
})
export class Logout {
	@Event() logout: EventEmitter // i don't thinks this is needed.
	handleClick(): void | Promise<void> {
		state.me.logout()
		window.location.href = window.location.origin
	}
	render() {
		return (
			<smoothly-button fill="solid" color="primary" onClick={() => this.handleClick()}>
				<smoothly-icon name="log-out-outline" size="medium"></smoothly-icon>
			</smoothly-button>
		)
	}
}
