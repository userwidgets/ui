import { Component, h, Host, Prop, State } from "@stencil/core"
import { userwidgets } from "@userwidgets/model"
import { model } from "../../../model"

@Component({
	tag: "userwidgets-me",
	styleUrl: "style.css",
	scoped: true,
})
export class UserwidgetsMe {
	@Prop() state: model.State

	@State() token?: userwidgets.User.Key | false
	async componentWillLoad() {
		this.state.me.listen("key", key => (this.token = key))
	}

	render() {
		// TODO: Create an user-icon a make it look fancy!
		return (
			<Host>
				{this.token ? (
					<span title={this.token.email}>
						{this.token.name.first} {this.token.name.last}
						<button onClick={() => this.state.me.logout()}>Logout</button>
					</span>
				) : this.token == undefined ? (
					["Not logged in", <button onClick={() => this.state.me.onUnauthorized?.()}>Login</button>]
				) : (
					["Error", <button onClick={() => this.state.me.onUnauthorized?.()}>Try login</button>]
				)}
			</Host>
		)
	}
}
