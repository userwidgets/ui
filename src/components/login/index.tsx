import { Component, Event, EventEmitter, h, Listen, Prop, State } from "@stencil/core"
import { model } from "../../model"

@Component({
	tag: "userwidgets-login",
	styleUrl: "style.css",
	scoped: true,
})
export class UserwidgetsLogin {
	@State() resolves?: ((result: boolean | PromiseLike<boolean>) => void)[]
	@Prop() state: model.State
	@Event() loggedIn: EventEmitter
	@Listen("login")
	async handleLogin(event: CustomEvent<model.userwidgets.User.Credentials>) {
		event.preventDefault()
		const response = await this.state.me.login({
			user: event.detail.user,
			password: event.detail.password,
		})
		if (this.resolves != undefined && response) {
			this.resolves.forEach(resolve => resolve(true))
			this.resolves = undefined
			this.loggedIn.emit()
		}
	}
	async componentWillLoad(): Promise<void> {
		this.state.onUnauthorized = () =>
			new Promise<boolean>(resolve => this.resolves?.push(resolve) ?? (this.resolves = [resolve]))
	}
	render() {
		return [this.resolves ? <userwidgets-login-dialog></userwidgets-login-dialog> : null, <slot></slot>]
	}
}
