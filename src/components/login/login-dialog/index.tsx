import { Component, Event, EventEmitter, h, Host, Prop, State } from "@stencil/core"
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
export class UserwidgetsLoginDialog {
	@Prop() state: model.State
	@Prop() invite?: userwidgets.User.Invite
	@State() processing = false
	@Event() notice: EventEmitter<smoothly.Notice>
	@Event() userwidgetsLogin: EventEmitter<userwidgets.User.Credentials>
	@Event() userwidgetsActiveAccount: EventEmitter<boolean>
	@Event() userWidgetsLoginControls: EventEmitter<{ clear: () => void }>
	@State() translate: langly.Translate = translation.create("en")
	private passwordInput?: HTMLSmoothlyInputElement

	componentWillLoad() {
		this.state.locales.listen("language", language => language && (this.translate = translation.create(language)))
		this.userWidgetsLoginControls.emit({
			clear: () => this.passwordInput?.clear(),
		})
	}
	handleSubmit(event: CustomEvent<model.Data>) {
		event.preventDefault()
		this.processing = true
		if (!userwidgets.User.Credentials.is(event.detail))
			this.notice.emit(smoothly.Notice.warn(this.translate("Both email and password is required to login.")))
		else if (!event.detail.user.match(/^\S+@\S+$/))
			this.notice.emit(smoothly.Notice.warn(this.translate("Provided email is not an email.")))
		else
			this.userwidgetsLogin.emit(event.detail)
		this.processing = false
	}

	render() {
		return (
			<Host>
				<slot name={"logo"} />
				<smoothly-form processing={this.processing} looks="border" onSmoothlyFormSubmit={e => this.handleSubmit(e)}>
					<smoothly-input type="email" name="user">
						{this.translate("Email")}
					</smoothly-input>
					<smoothly-input ref={e => (this.passwordInput = e)} type="password" name="password">
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
					<smoothly-submit color="primary" slot="submit">
						{this.translate("Login")}
					</smoothly-submit>
				</smoothly-form>
			</Host>
		)
	}
}
