import { Component, Event, EventEmitter, h, Listen, Prop, State } from "@stencil/core"
import * as gracely from "gracely"
import { model } from "../../../model"
import { Me, store } from "../../../Store"

@Component({
	tag: "userwidgets-login",
	styleUrl: "style.css",
	scoped: true,
})
export class UserwidgetsLogin {
	@State() resolve?: (result: boolean | PromiseLike<boolean>) => void
	@Prop() store: { me: Me } = store
	@Event() loggedIn: EventEmitter
	@Listen("login")
	async handleLogin(event: CustomEvent<model.userwidgets.User.Credentials>) {
		event.preventDefault()
		const response = await store.me.login("issuefabApplicationId", {
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
		store.onUnauthorized = () => new Promise<boolean>(resolve => (this.resolve = resolve))
	}

	render() {
		return [this.resolve ? <userwidgets-login-dialog></userwidgets-login-dialog> : null, <slot></slot>]
	}
}
