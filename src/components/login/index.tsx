import { Component, Event, EventEmitter, h, Host, Prop, State } from "@stencil/core"
import * as langly from "langly"
import { smoothly } from "smoothly"
import { userwidgets } from "@userwidgets/model"
import { URLPattern } from "urlpattern-polyfill"
import { model } from "../../model"
import * as translation from "./translation"

if (!("URLPattern" in globalThis))
	Object.assign(globalThis, { URLPattern })
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
	@Event() notice: EventEmitter<smoothly.Notice>
	@State() translate: langly.Translate = translation.create("en")
	private onUnauthorized = () => new Promise<boolean>(resolve => (this.resolves ??= []).push(resolve))

	componentWillLoad() {
		this.state.me.onUnauthorized = this.onUnauthorized
		this.state.me.invite.listen("value", value => value && this.handleInvite(value))
	}
	async handleInvite(inviteToken: string) {
		this.onUnauthorized()
		this.invite = await userwidgets.User.Invite.Verifier.create().verify(inviteToken)

		if (this.invite) {
			this.activeAccount = this.invite.active
			if (this.invite.active && (await this.state.me.join(this.invite)))
				this.invite = undefined
		} else
			this.notice.emit(smoothly.Notice.warn(this.translate("Used invite is not valid.")))
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
			if (this.invite)
				this.state.me.join(this.invite)
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
		return (
			<Host>
				{this.resolves ? (
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
				) : null}
				<slot />
			</Host>
		)
	}
}
