import { Component, ComponentWillLoad, Event, EventEmitter, h, Host, Listen, Prop, State, VNode } from "@stencil/core"
import { langly } from "langly"
import { smoothly } from "smoothly"
import { userwidgets } from "@userwidgets/model"
import { URLPattern } from "urlpattern-polyfill"
import { UserwidgetsLoginDialogCustomEvent } from "../../components"
import { model } from "../../model"
import * as translation from "./translation"

if (!("URLPattern" in globalThis))
	Object.assign(globalThis, { URLPattern })
@Component({
	tag: "userwidgets-login",
	styleUrl: "style.css",
	scoped: true,
})
export class UserwidgetsLogin implements ComponentWillLoad {
	@Prop() state: model.State
	@State() resolves?: (() => void)[]
	@State() invite?: userwidgets.User.Invite
	@State() activeAccount?: boolean
	@State() credentials?: userwidgets.User.Credentials
	@State() translate: langly.Translate = translation.create("en")
	@Event() loggedIn: EventEmitter
	@Event() userwidgetsLoginLoaded: EventEmitter
	@Event() notice: EventEmitter<smoothly.Notice>
	private loginControls?: { clear: () => void }
	private request?: Promise<unknown>
	private spinner?: (result: false) => void
	private onUnauthorized = () =>
		new Promise<boolean>(resolve => {
			if (this.request) {
				this.notice.emit(smoothly.Notice.failed(this.translate("Wrong credentials")))
				this.loginControls?.clear()
				this.spinner?.(false)
				this.spinner = undefined
			}
			return (this.resolves ??= []).push(() => resolve(!this.request))
		})

	componentWillLoad(): void {
		this.state.me.onUnauthorized = this.onUnauthorized
		this.state.locales.listen("language", language => language && (this.translate = translation.create(language)))
		this.state.me.invite.listen("value", value => value && this.handleInvite(value))
	}
	componentDidLoad(): void {
		this.userwidgetsLoginLoaded.emit()
	}
	async handleInvite(inviteToken: string): Promise<void> {
		this.invite = await userwidgets.User.Invite.Verifier.create().unpack(inviteToken)
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
	cancelHandler(event: CustomEvent): void {
		event?.stopPropagation()
		this.credentials = undefined
	}
	@Listen("userWidgetsLoginControls")
	loginControlsHandler(event: UserwidgetsLoginDialogCustomEvent<{ clear: () => void }>): void {
		event.stopPropagation()
		this.loginControls = event.detail
	}

	async loginHandler(
		event: CustomEvent<
			Pick<smoothly.Submit, "result"> & { credentials: userwidgets.User.Credentials & { code?: string } }
		>
	): Promise<void> {
		event.stopPropagation()
		this.spinner?.(false)
		this.spinner = event.detail.result
		event.detail.result(
			await this.login(
				{ user: event.detail.credentials.user, password: event.detail.credentials.password },
				event.detail.credentials.code
			)
		)
	}
	private async login(credentials: userwidgets.User.Credentials, twoFactor?: string): Promise<boolean> {
		let result: Awaited<ReturnType<UserwidgetsLogin["login"]>>
		const request = (this.request = this.state.me.login(credentials, twoFactor))
		const response = await request
		if (request != this.request)
			result = false
		else if (userwidgets.User.Key.is(response)) {
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
			this.request = undefined
			result = true
		} else if (userwidgets.User.Unauthenticated.is(response)) {
			console.log("diwaidhwaoi")
			this.credentials &&
				this.notice.emit(smoothly.Notice.failed(this.translate("Invalid authenticator code, please try again.")))
			this.credentials = { ...credentials }
			result = false
		} else {
			this.notice.emit(smoothly.Notice.failed(this.translate("Failed to login, please try again later.")))
			this.credentials = undefined
			this.loginControls?.clear()
			result = false
		}
		return result
	}

	async authenticateHandler(event: CustomEvent<Pick<smoothly.Submit, "result"> & { code: string }>): Promise<void> {
		event.detail.result(!!(this.credentials && (await this.login(this.credentials, event.detail.code))))
	}
	async activeAccountHandler(event: CustomEvent<boolean>): Promise<void> {
		this.activeAccount = event.detail
	}

	async registerHandler(
		event: CustomEvent<
			Pick<smoothly.Submit, "result"> & {
				invite: userwidgets.User.Invite
				credentials: userwidgets.User.Credentials.Register
			}
		>
	): Promise<void> {
		const response = await this.state.me.register(event.detail.invite, event.detail.credentials)
		if (userwidgets.User.Key.is(response) && this.resolves) {
			this.invite = undefined
			this.resolves.forEach(resolve => resolve())
			this.resolves = undefined
			this.loggedIn.emit()
			event.detail.result(true)
		} else {
			event.detail.result(false)
			this.notice.emit(smoothly.Notice.failed(this.translate(`Failed to register.`)))
		}
	}

	render(): VNode | VNode[] {
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
						) : (
							<userwidgets-login-dialog
								class={"dialog"}
								twoFactor={!!this.credentials}
								state={this.state}
								invite={this.invite}
								onUserwidgetsLogin={event => this.loginHandler(event)}
								onClearCredentials={() => (this.credentials = undefined)}
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
