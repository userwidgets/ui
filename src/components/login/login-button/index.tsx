import { Component, h, Prop, State } from "@stencil/core"
import { smoothly } from "smoothly"
import { userwidgets } from "@userwidgets/model"
import { model } from "../../../model"

@Component({
	tag: "userwidgets-login",
	styleUrl: "style.css",
	scoped: true,
})
export class Login {
	@Prop() state: model.State
	@Prop({ reflect: true }) color: smoothly.Color

	@State() key?: userwidgets.User.Key
	componentWillLoad() {
		this.state.me.listen("key", key => (this.key = key || undefined))
	}

	handleClick(): void | Promise<void> {
		this.state.me.logout()
		smoothly.redirect(window.location.origin)
	}
	render() {
		return this.key ? (
			<smoothly-button fill="solid" color={this.color} size="flexible" onClick={() => this.handleClick()}>
				<smoothly-icon name="log-in-outline" size="medium"></smoothly-icon>
			</smoothly-button>
		) : null
	}
}
