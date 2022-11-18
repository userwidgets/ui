import { Component, Event, EventEmitter, h, Listen, Prop, State } from "@stencil/core"
import { model } from "../../model"

@Component({
	tag: "userwidgets-login",
	styleUrl: "style.css",
	scoped: true,
})
export class UserwidgetsLogin {
	@State() resolve?: (result: boolean | PromiseLike<boolean>) => void
	@Prop() state: model.State
	@Event() loggedIn: EventEmitter
	@Listen("login")
	async handleLogin(event: CustomEvent<model.userwidgets.User.Credentials>) {
		event.preventDefault()
		const response = await this.state.me.login({
			user: event.detail.user,
			password: event.detail.password,
		})
		if (this.resolve != undefined && response) {
			this.resolve(true)
			this.resolve = undefined
			this.loggedIn.emit()
		}
	}
	async componentWillLoad(): Promise<void> {
		this.state.onUnauthorized = () => new Promise<boolean>(resolve => (this.resolve = resolve))
	}
	render() {
		return [this.resolve ? <userwidgets-login-dialog></userwidgets-login-dialog> : null, <slot></slot>]
	}
}
