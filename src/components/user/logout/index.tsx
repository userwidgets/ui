import { Component, h, Prop, State } from "@stencil/core"
import { redirect } from "smoothly"
import { model } from "../../../model"

@Component({
	tag: "userwidgets-logout",
	styleUrl: "style.css",
	scoped: true,
})
export class Logout {
	@Prop() state: model.State
	@State() key?: model.userwidgets.User.Key
	componentWillLoad() {
		this.state.me.listen("key", async promise => {
			const key = await promise
			this.key = key ? key : undefined
		})
	}

	handleClick(): void | Promise<void> {
		this.state.me.logout()
		redirect(window.location.origin)
	}
	render() {
		return this.key ? (
			<smoothly-button fill="solid" color="primary" onClick={() => this.handleClick()}>
				<smoothly-icon name="log-out-outline" size="medium"></smoothly-icon>
			</smoothly-button>
		) : null
	}
}
