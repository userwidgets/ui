import { Component, Fragment, h, Host, Prop, State } from "@stencil/core"
import { userwidgets } from "@userwidgets/model"
import { model } from "../../../../model"

@Component({
	tag: "userwidgets-me-menu",
	styleUrl: "style.css",
	scoped: true,
})
export class UserwidgetsMeMenu {
	@Prop() state: model.State
	@Prop({ mutable: true, reflect: true }) visible = false
	@Prop({ mutable: true, reflect: true }) open = false
	@Prop() path: string
	@State() token?: userwidgets.User.Key | false

	async componentWillLoad() {
		this.state.me.listen("key", key => (this.token = key))
	}

	render() {
		return (
			<Host>
				<smoothly-button size="flexible" onClick={() => (this.open = !this.open)}>
					<smoothly-icon size="medium" name="person" />
				</smoothly-button>
				<div class={this.open ? "open" : "closed"}>
					<div class="spacer"></div>
					{this.token ? (
						<Fragment>
							<smoothly-display type="text" value={this.token.name.first + " " + this.token.name.last} />
							<userwidgets-organization-picker state={this.state} />
							<div class="actions">
								<slot name="action" />
								<userwidgets-logout state={this.state} />
							</div>
						</Fragment>
					) : (
						<Fragment>
							<userwidgets-login-button state={this.state} />
						</Fragment>
					)}
				</div>
			</Host>
		)
	}
}
