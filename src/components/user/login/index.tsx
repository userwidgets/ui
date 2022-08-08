import { Component, Event, EventEmitter, h, Host, Listen, State } from "@stencil/core"
import * as gracely from "gracely"
import { client } from "../../../client"
import { model } from "../../../model"

@Component({
	tag: "userwidget-login",
	styleUrl: "style.css",
	scoped: true,
})
export class Login {
	@State() resolve?: (result: boolean | PromiseLike<boolean>) => void
	@Event() loggedIn: EventEmitter
	@Listen("login")
	async handleLogin(event: CustomEvent<model.userwidgets.User.Credentials>) {
		event.preventDefault()
		const response = await client.me.login("issuefabAppId", {
			user: event.detail.user,
			password: event.detail.password,
		})
		if (this.resolve != undefined && !gracely.Error.is(response)) {
			this.resolve(true)
			this.resolve = undefined
			sessionStorage.setItem("token", response.token)
			this.loggedIn.emit()
		}
	}
	async componentWillLoad(): Promise<void> {
		client.onUnauthorized = () => new Promise<boolean>(resolve => (this.resolve = resolve))
	}

	render() {
		return (
			<Host>
				{this.resolve ? <userwidget-login-dialog></userwidget-login-dialog> : null}
				<slot></slot>
			</Host>
		)
	}
}
