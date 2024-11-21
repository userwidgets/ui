import { Component, ComponentWillLoad, Event, EventEmitter, h, Host, Prop, State, VNode } from "@stencil/core"
import * as langly from "langly"
import { smoothly } from "smoothly"
import { userwidgets } from "@userwidgets/model"
import { model } from "../../../model"
import * as translation from "./translation"

@Component({
	tag: "userwidgets-login-dialog",
	styleUrl: "style.css",
	scoped: true,
})
export class UserwidgetsLoginDialog implements ComponentWillLoad {
	@Prop() state: model.State
	@Prop({ mutable: true }) twoFactor: boolean = false
	@Prop() invite?: userwidgets.User.Invite
	@State() application?: userwidgets.Application
	@State() translate: langly.Translate = translation.create("en")
	@Event() notice: EventEmitter<smoothly.Notice>
	@Event() userwidgetsLogin: EventEmitter<
		Pick<smoothly.Submit, "result"> & {
			credentials: userwidgets.User.Credentials
		}
	>
	@Event() clearCredentials: EventEmitter
	@Event() userWidgetsLoginControls: EventEmitter<{ clear: () => void }>
	@Event() userwidgetsLoginMode: EventEmitter<{ mode: "login" | "sign" | "register" }>
	private passwordInput?: HTMLSmoothlyInputElement

	componentWillLoad(): void {
		this.state.locales.listen("language", language => language && (this.translate = translation.create(language)))
		this.state.applications.listen("current", application => (this.application = application || undefined))
		this.userWidgetsLoginControls.emit({
			clear: () => this.passwordInput?.clear(),
		})
	}
	handleSubmit(event: CustomEvent<smoothly.Submit>): void {
		event.stopPropagation()
		if (!userwidgets.User.Credentials.is(event.detail.value))
			this.notice.emit(smoothly.Notice.warn(this.translate("Both email and password is required to login."))) &&
				event.detail.result(false)
		else if (!event.detail.value.user.match(/^\S+@\S+$/))
			this.notice.emit(smoothly.Notice.warn(this.translate("Provided email is not an email."))) &&
				event.detail.result(false)
		else
			this.userwidgetsLogin.emit({ credentials: event.detail.value, result: event.detail.result })
	}
	clear() {
		this.twoFactor = false
		this.clearCredentials.emit()
	}
	loginModeHandler(event: MouseEvent, mode: "login" | "sign" | "register"): void {
		event.preventDefault()
		this.userwidgetsLoginMode.emit({ mode })
	}
	render(): VNode | VNode[] {
		return (
			<Host>
				<slot name={"logo"} />
				<smoothly-form looks="border" onSmoothlyFormSubmit={e => this.handleSubmit(e)}>
					<smoothly-input
						type="email"
						name="user"
						onSmoothlyInput={() => this.clear()}
						{...(this.invite && { value: this.invite.email, readonly: true })}>
						{this.translate("Email")}
					</smoothly-input>
					<smoothly-input
						ref={e => (this.passwordInput = e)}
						type="password"
						name="password"
						onSmoothlyInput={() => this.clear()}>
						{this.translate("Password")}
					</smoothly-input>
					{this.invite && !this.invite.active ? (
						<p slot="submit">
							{this.translate("Don't have an account? ")}
							<a href={window.location.href} onClick={e => this.loginModeHandler(e, "register")}>
								{this.translate("Register")}
							</a>
						</p>
					) : (
						this.application?.selfSignOn && (
							<p slot={"submit"}>
								<a href={window.location.href} onClick={e => this.loginModeHandler(e, "sign")}>
									{this.translate("Register")}
								</a>
							</p>
						)
					)}
					{this.twoFactor && (
						<smoothly-input type="text" name="code">
							{this.translate("Authentication Code")}
						</smoothly-input>
					)}
					<smoothly-input-submit slot="submit" color="primary">
						<span>{this.translate("Login")}</span>
					</smoothly-input-submit>
				</smoothly-form>
			</Host>
		)
	}
}
