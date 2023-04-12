import { Component, Event, EventEmitter, h, Listen, Prop, State } from "@stencil/core"
import "smoothly"
import { userwidgets } from "@userwidgets/model"
import { URLPattern } from "urlpattern-polyfill"
import { model } from "../../model"

if (!("URLPattern" in globalThis))
	(globalThis as any).URLPattern = URLPattern
@Component({
	tag: "userwidgets-login",
	styleUrl: "style.css",
	scoped: true,
})
export class UserwidgetsLogin {
	@State() resolves?: ((result: boolean | PromiseLike<boolean>) => void)[]
	@State() jwt?: string
	@Prop() state: model.State
	@Event() loggedIn: EventEmitter
	@Event() userwidgetsLoginLoaded: EventEmitter

	async loginHandler(event: CustomEvent<userwidgets.User.Credentials>) {
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
	async registerHandler(event: CustomEvent<void>) {}
	componentWillLoad() {
		this.state.me.listen(
			"jwtParameter",
			jwtParameter =>
				(this.jwt = !jwtParameter
					? undefined
					: new URL(window.location.href).searchParams.get(jwtParameter) || undefined)
		)
		this.state.me.onUnauthorized = () =>
			new Promise<boolean>(resolve => this.resolves?.push(resolve) ?? (this.resolves = [resolve]))
	}
	componentDidLoad() {
		this.userwidgetsLoginLoaded.emit()
	}
	render() {
		return [
			this.resolves ? (
				this.jwt ? (
					<userwidgets-register state={this.state} jwt={this.jwt} onRegister={}/>
				) : (
					<userwidgets-login-dialog state={this.state} onLogin={event => this.loginHandler(event)} />
				)
			) : null,
			<slot />,
		]
	}
}
