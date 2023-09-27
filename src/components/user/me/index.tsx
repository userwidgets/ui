import { Component, Fragment, h, Host, Prop, State } from "@stencil/core"
import { userwidgets } from "@userwidgets/model"
import { model } from "../../../model"

@Component({
	tag: "userwidgets-me",
	styleUrl: "style.css",
	scoped: true,
})
export class UserwidgetsMe {
	@Prop() state: model.State
	@Prop({ mutable: true, reflect: true }) visible = false
	@Prop({ mutable: true, reflect: true }) open = false
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
							<smoothly-display
								type="text"
								value={this.token.name.first + " " + this.token.name.last}></smoothly-display>
							<userwidgets-organization-picker state={this.state} />
							<div class="actions">
								<smoothly-button fill="solid" size="flexible" onClick={() => console.log("yo")}>
									<smoothly-icon name="settings-outline" size="medium" />
								</smoothly-button>
								<userwidgets-logout state={this.state} />
							</div>
						</Fragment>
					) : this.token == undefined ? (
						<Fragment>
							<span>Not logged in</span> <button onClick={() => this.state.me.onUnauthorized?.()}>Login</button>{" "}
						</Fragment>
					) : (
						<Fragment>
							<span>Error</span> <button onClick={() => this.state.me.onUnauthorized?.()}>Try login</button>
						</Fragment>
					)}
				</div>
			</Host>
		)
	}
}
