import { Component, h, Prop, State } from "@stencil/core"
import { smoothly } from "smoothly"
import { userwidgets } from "@userwidgets/model"
import { model } from "../../../model"

@Component({
	tag: "userwidgets-login-button",
	styleUrl: "style.css",
	scoped: true,
})
export class LoginButton {
	@Prop() state: model.State
	@State() key?: userwidgets.User.Key
	componentWillLoad() {
		this.state.me.listen("key", key => (this.key = key || undefined))
	}

	handleClick(): void | Promise<void> {
		this.state.me.logout()
		smoothly.redirect(window.location.origin)
	}
	render() {
		return (
			<smoothly-button fill="solid" size="flexible" onClick={() => this.state.me.onUnauthorized?.()}>
				<smoothly-icon name="log-in-outline" size="medium" />
			</smoothly-button>
		)
	}
}
