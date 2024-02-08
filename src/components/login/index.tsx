import { Component, Event, EventEmitter, h, Host, Listen, Prop, State } from "@stencil/core"
import { langly } from "langly"
import { smoothly } from "smoothly"
import { userwidgets } from "@userwidgets/model"
import { URLPattern } from "urlpattern-polyfill"
import { UserwidgetsLoginDialogCustomEvent } from "../../components"
import { model } from "../../model"
import { Me } from "../../State/Me"
import * as translation from "./translation"

if (!("URLPattern" in globalThis))
	Object.assign(globalThis, { URLPattern })
@Component({
	tag: "userwidgets-login",
	styleUrl: "style.css",
	scoped: true,
})
export class UserwidgetsLogin {
	@Prop() state: model.State
	@State() resolves?: (() => void)[]
	@State() invite?: userwidgets.User.Invite
	@State() activeAccount?: boolean
	@State() private credentials?: userwidgets.User.Credentials
	@State() translate: langly.Translate = translation.create("en")
	@Event() loggedIn: EventEmitter
	@Event() userwidgetsLoginLoaded: EventEmitter
	@Event() notice: EventEmitter<smoothly.Notice>
	private request?: ReturnType<Me["login"]>
	private onUnauthorized = () =>
		new Promise<boolean>(resolve => {
			if (this.request) {
				this.notice.emit(smoothly.Notice.failed(this.translate("Wrong credentials")))
				this.loginControls?.clear()
			}
			return (this.resolves ??= []).push(() => resolve(!this.request))
		})
	private loginControls?: { clear: () => void }

	componentWillLoad() {
		this.state.me.onUnauthorized = this.onUnauthorized
		this.state.locales.listen("language", language => language && (this.translate = translation.create(language)))
		this.state.me.invite.listen("value", value => value && this.handleInvite(value))
	}
	componentDidLoad() {
		this.userwidgetsLoginLoaded.emit()
	}
	async handleInvite(inviteToken: string) {
		this.invite = await userwidgets.User.Invite.Verifier.create().verify(inviteToken)
		if (this.invite) {
			this.activeAccount = this.invite.active
			if (this.invite.active) {
				const invite = this.invite
				this.invite = undefined
				if (!(await this.state.me.join(invite)))
					this.invite = invite
			}
		} else
			this.notice.emit(smoothly.Notice.warn(this.translate("Used invite is not valid.")))
	}
	@Listen("userwidgetsCancel")
	cancelHandler(event: CustomEvent) {
		event?.stopPropagation()
		this.credentials = undefined
	}
	@Listen("userWidgetsLoginControls")
	loginControlsHandler(event: UserwidgetsLoginDialogCustomEvent<{ clear: () => void }>) {
		event.stopPropagation()
		this.loginControls = event.detail
	}

	async loginHandler(event: CustomEvent<userwidgets.User.Credentials>) {
		event.preventDefault()
		await this.login(event.detail)
	}
	private async login(credentials: userwidgets.User.Credentials, twoFactor?: string) {
		const response = await (this.request = this.state.me.login(credentials, twoFactor))
		if (userwidgets.User.Key.is(response)) {
			if (this.invite) {
				const invite = this.invite
				this.invite = undefined
				if (!(await this.state.me.join(invite)))
					this.invite = invite
			}
			this.resolves?.forEach(resolve => resolve())
			this.resolves = undefined
			this.credentials = undefined
			this.loggedIn.emit()
		} else if (userwidgets.User.Unauthenticated.is(response)) {
			this.credentials &&
				this.notice.emit(smoothly.Notice.failed(this.translate("Invalid authenticator code, please try again.")))
			this.credentials = credentials
		} else {
			this.notice.emit(smoothly.Notice.failed(this.translate("Server not available")))
			this.credentials = undefined
			this.loginControls?.clear()
		}
		this.request = undefined
	}

	async authenticateHandler(event: CustomEvent<string>) {
		event.preventDefault()
		this.credentials && (await this.login(this.credentials, event.detail))
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
			this.resolves.forEach(resolve => resolve())
			this.resolves = undefined
			this.loggedIn.emit()
		}
	}

	render() {
		return (
			<Host>
				{this.resolves ? (
					<div key="dialog" class={"mask"}>
						{this.invite && !this.activeAccount ? (
							<userwidgets-register-dialog
								class={"dialog"}
								state={this.state}
								invite={this.invite}
								onUserwidgetsRegister={event => this.registerHandler(event)}
								onUserwidgetsActiveAccount={event => this.activeAccountHandler(event)}>
								<slot slot={"logo"} name={"logo"} />
							</userwidgets-register-dialog>
						) : this.credentials ? (
							<userwidgets-two-factor-dialog
								class={"dialog"}
								state={this.state}
								onUserwidgetsAuthenticate={event => this.authenticateHandler(event)}>
								<slot slot={"logo"} name={"logo"} />
							</userwidgets-two-factor-dialog>
						) : (
							<userwidgets-login-dialog
								class={"dialog"}
								state={this.state}
								onUserwidgetsLogin={event => this.loginHandler(event)}
								onUserwidgetsActiveAccount={event => this.activeAccountHandler(event)}>
								<slot slot={"logo"} name={"logo"} />
							</userwidgets-login-dialog>
						)}
					</div>
				) : (
					<div key="hidden" class="hidden">
						<slot slot={"logo"} name={"logo"} />
					</div>
				)}
				<div key="default">
					<slot />
				</div>
			</Host>
		)
	}
}
