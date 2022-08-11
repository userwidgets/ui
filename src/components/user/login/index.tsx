import { Component, Event, EventEmitter, h, Listen, Prop, State } from "@stencil/core"
import * as gracely from "gracely"
import { model } from "../../../model"
import { Me } from "../../../Store"

@Component({
	tag: "userwidgets-login",
	styleUrl: "style.css",
	scoped: true,
})
export class UserwidgetsLogin {
	@State() resolve?: (result: boolean | PromiseLike<boolean>) => void
	@Prop() store: { me: Me; onUnauthorized: () => Promise<boolean> }
	@Event() loggedIn: EventEmitter
	@Listen("login")
	async handleLogin(event: CustomEvent<model.userwidgets.User.Credentials>) {
		event.preventDefault()
		const response = await this.store.me.login("issuefabApplicationId", {
			user: event.detail.user,
			password: event.detail.password,
		})
		if (this.resolve != undefined && !gracely.Error.is(response)) {
			this.resolve(true)
			this.resolve = undefined
			this.loggedIn.emit()
		}
	}
	async componentWillLoad(): Promise<void> {
		console.log(Object.keys(this.store))
		this.store.onUnauthorized = () => new Promise<boolean>(resolve => (this.resolve = resolve))
	}

	render() {
		console.log("login rendered!")
		return [this.resolve ? <userwidgets-login-dialog></userwidgets-login-dialog> : null, <slot></slot>]
	}
}
