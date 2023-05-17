import { Component, Event, EventEmitter, h, Prop, State } from "@stencil/core"
import * as langly from "langly"
import { Notice } from "smoothly"
import { userwidgets } from "@userwidgets/model"
import { URLPattern } from "urlpattern-polyfill"
import { model } from "../../model"
import * as translation from "./translation"

if (!("URLPattern" in globalThis))
	(globalThis as any).URLPattern = URLPattern
@Component({
	tag: "userwidgets-login",
	styleUrl: "style.css",
	scoped: true,
})
export class UserwidgetsLogin {
	@State() resolves?: ((result: boolean | PromiseLike<boolean>) => void)[]
	@State() invite?: userwidgets.User.Invite
	@State() activeAccount?: boolean
	@Prop() state: model.State
	@Event() loggedIn: EventEmitter
	@Event() userwidgetsLoginLoaded: EventEmitter
	@Event() notice: EventEmitter<Notice>
	@State() translate: langly.Translate = translation.create("en")
	onUnauthorized = () => new Promise<boolean>(resolve => (this.resolves ??= []).push(resolve))
	componentWillLoad() {
		console.log("userwidgets-login.componentWillLoad")
		this.state.me.onUnauthorized = this.onUnauthorized

		const inviteToken = new URL(window.location.href).searchParams.get(this.state.me.inviteParameterName) || undefined
		console.log("userwidgets-login.componentWillLoad.inviteToken", inviteToken)
		if (inviteToken) {
			this.onUnauthorized()
			userwidgets.User.Invite.Verifier.create()
				.verify(inviteToken)
				.then(invite => {
					if (invite) {
						this.invite = invite
						this.activeAccount = this.invite?.active
						if (this.invite?.active) {
							this.state.me.join(this.invite).then(response => {
								if (response)
									this.invite = undefined
							})
						}
					} else
						this.notice.emit(Notice.warn(this.translate("Used invite is not valid.")))
				})
		}
	}
	componentDidLoad() {
		this.userwidgetsLoginLoaded.emit()
	}

	async loginHandler(event: CustomEvent<userwidgets.User.Credentials>) {
		event.preventDefault()
		const response = await this.state.me.login(event.detail)
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
		event: CustomEvent<{ invite: userwidgets.User.Invite; credentials: userwidgets.User.Credentials.Register }>
	) {
		const response = await this.state.me.register(event.detail.invite, event.detail.credentials)
		if (userwidgets.User.Key.is(response) && this.resolves) {
			this.invite = undefined
			this.resolves.forEach(resolve => resolve(true))
			this.resolves = undefined
			this.loggedIn.emit()
		}
	}

	render() {
		return [
			this.resolves ? (
				<div class={"mask"}>
					{this.invite && !this.activeAccount ? (
						<userwidgets-register-dialog
							class={"dialog"}
							state={this.state}
							invite={this.invite}
							onUserwidgetsRegister={event => this.registerHandler(event)}
							onUserwidgetsActiveAccount={event => this.activeAccountHandler(event)}
						/>
					) : (
						<userwidgets-login-dialog
							class={"dialog"}
							state={this.state}
							invite={this.invite}
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
