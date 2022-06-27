import { Component, ComponentWillLoad, Event, EventEmitter, h, Host, Listen, State } from "@stencil/core"
import * as gracely from "gracely"
import { client } from "../../../client"
import { UserCredentials } from "./UserCredentials"

@Component({
	tag: "uw-login",
	styleUrl: "style.css",
	scoped: true,
})
export class Login implements ComponentWillLoad {
	@State() resolve?: (result: boolean | PromiseLike<boolean>) => void
	@Event() loggedIn: EventEmitter
	@Listen("login")
	async handleLogin(event: CustomEvent<UserCredentials>) {
		event.preventDefault()
		const response = await client.me.login(event.detail.user, event.detail.password)
		if (this.resolve != undefined && !gracely.Error.is(response)) {
			this.resolve(true)
			sessionStorage.setItem("jwt", response.token)
			this.loggedIn.emit()
		}
		if (!gracely.Error.is(response)) {
			this.resolve = undefined
		}
	}
	componentWillLoad(): void | Promise<void> {
		client.onUnauthorized = () => new Promise<boolean>(resolve => (this.resolve = resolve))
	}
	render() {
		return (
			<Host>
				{this.resolve ? <uw-login-dialog></uw-login-dialog> : []}
				<slot></slot>
			</Host>
		)
	}
}
