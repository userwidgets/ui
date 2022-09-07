import { Component, h, Prop } from "@stencil/core"
import { Listenable } from "../../../State/Listenable"
import { Me } from "../../../State/Me"
@Component({
	tag: "userwidgets-logout",
	styleUrl: "style.css",
	scoped: true,
})
export class Logout {
	@Prop() state: {
		me: Me & Listenable<Me>
	}

	handleClick(): void | Promise<void> {
		this.state.me.logout()
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
