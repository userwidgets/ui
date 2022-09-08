import { Component, h, Prop, State } from "@stencil/core"
import { model } from "../../../model"
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
	@State() key?: model.userwidgets.User.Key
	componentWillLoad() {
		this.state.me.listen("key", async promise => {
			const key = await promise
			this.key = key ? key : undefined
		})
	}

	handleClick(): void | Promise<void> {
		this.state.me.logout()
		window.location.href = window.location.origin
	}
	render() {
		return this.key ? (
			<smoothly-button fill="solid" color="primary" onClick={() => this.handleClick()}>
				<smoothly-icon name="log-out-outline" size="medium"></smoothly-icon>
			</smoothly-button>
		) : null
	}
}
