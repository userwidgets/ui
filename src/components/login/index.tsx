import { Component, Event, EventEmitter, h, Prop, State } from "@stencil/core"
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
	@State() tag?: userwidgets.User.Tag
	@State() activeAccount?: boolean
	@Prop() state: model.State
	@Event() loggedIn: EventEmitter
	@Event() userwidgetsLoginLoaded: EventEmitter

	componentWillLoad() {
		this.state.me.listen("jwtParameter", async jwtParameter => {
			const token = !jwtParameter
				? undefined
				: new URL(window.location.href).searchParams.get(jwtParameter) || undefined
			this.tag = await userwidgets.User.Tag.unpack((token?.split(".").length != 3 ? `${token}.` : token) ?? "")
			this.activeAccount = this.tag?.active
		})
		this.state.me.onUnauthorized = () =>
			new Promise<boolean>(resolve => this.resolves?.push(resolve) ?? (this.resolves = [resolve]))
	}
	componentDidLoad() {
		this.userwidgetsLoginLoaded.emit()
	}

	async loginHandler(event: CustomEvent<userwidgets.User.Credentials>) {
		event.preventDefault()
		const response = await this.state.me.login({
			user: event.detail.user,
			password: event.detail.password,
		})
		if (userwidgets.User.Key.is(response) && this.resolves) {
			this.resolves.forEach(resolve => resolve(true))
			this.resolves = undefined
			this.loggedIn.emit()
		}
	}

	async activeAccountHandler(event: CustomEvent<boolean>) {
		this.activeAccount = event.detail
	}

	async registerHandler(
		event: CustomEvent<{ tag: userwidgets.User.Tag; credentials: userwidgets.User.Credentials.Register }>
	) {
		const response = await this.state.me.register(event.detail.tag, event.detail.credentials)
		if (userwidgets.User.Key.is(response) && this.resolves) {
			this.tag = undefined
			this.resolves.forEach(resolve => resolve(true))
			this.resolves = undefined
			this.loggedIn.emit()
		}
	}

	render() {
		return [
			this.resolves ? (
				<div class={"mask"}>
					{this.tag && !this.activeAccount ? (
						<userwidgets-register-dialog
							class={"dialog"}
							state={this.state}
							tag={this.tag}
							onUserwidgetsRegister={event => this.registerHandler(event)}
							onUserwidgetsActiveAccount={event => this.activeAccountHandler(event)}
						/>
					) : (
						<userwidgets-login-dialog
							class={"dialog"}
							state={this.state}
							tag={this.tag}
							onUserwidgetsLogin={event => this.loginHandler(event)}
							onUserwidgetsActiveAccount={event => this.activeAccountHandler(event)}
						/>
					)}
				</div>
			) : null,
			<slot />,
		]
	}
}
