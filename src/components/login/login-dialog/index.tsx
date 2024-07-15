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
	@Prop() invite?: userwidgets.User.Invite
	@Prop({ mutable: true }) twoFactor: boolean = false
	@Event() notice: EventEmitter<smoothly.Notice>
	@Event() userwidgetsLogin: EventEmitter<
		Pick<smoothly.Submit, "result"> & {
			credentials: userwidgets.User.Credentials
		}
	>
	@Event() userwidgetsActiveAccount: EventEmitter<boolean>
	@Event() clearCredentials: EventEmitter
	@Event() userWidgetsLoginControls: EventEmitter<{ clear: () => void }>
	@State() translate: langly.Translate = translation.create("en")
	private passwordInput?: HTMLSmoothlyInputElement

	componentWillLoad(): void {
		this.state.locales.listen("language", language => language && (this.translate = translation.create(language)))
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
	render(): VNode | VNode[] {
		return (
			<Host>
				<slot name={"logo"} />
				<smoothly-form looks="border" onSmoothlyFormSubmit={e => this.handleSubmit(e)}>
					<smoothly-input type="email" name="user" onSmoothlyInput={() => this.clear()}>
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
							<a
								href={window.location.href}
								onClick={e => (e.preventDefault(), this.userwidgetsActiveAccount.emit(false))}>
								{this.translate("Register")}
							</a>
						</p>
					) : null}
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
