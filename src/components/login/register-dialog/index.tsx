import { Component, Event, EventEmitter, h, Host, Prop, State } from "@stencil/core"
import * as langly from "langly"
import { smoothly } from "smoothly"
import { userwidgets } from "@userwidgets/model"
import { model } from "../../../model"
import * as translation from "./translation"

@Component({
	tag: "userwidgets-register-dialog",
	styleUrl: "style.css",
	scoped: true,
})
export class UserwidgetsRegister {
	@Prop() invite: userwidgets.User.Invite
	@State() key?: userwidgets.User.Key
	@State() processing = false
	@Prop() state: model.State
	@Event() notice: EventEmitter<smoothly.Notice>
	@Event() userwidgetsRegister: EventEmitter<{
		invite: userwidgets.User.Invite
		credentials: userwidgets.User.Credentials.Register
	}>
	@Event() userwidgetsActiveAccount: EventEmitter<boolean>
	@State() translate: langly.Translate = translation.create("en")

	async componentWillLoad() {
		this.state.locales.listen("language", language => language && (this.translate = translation.create(language)))
	}

	async handleSubmit(event: CustomEvent<model.Data>) {
		event.preventDefault()
		event.stopPropagation()
		this.processing = true
		const detail = {
			...event.detail,
			user: this.invite.email,
		}
		if (!userwidgets.User.Credentials.Register.is(detail)) {
			this.notice.emit(
				smoothly.Notice.warn(
					this.translate(
						"User credential requires a first and last name. Additionally the Password and Repeat password must be identical and at least 6 characters long."
					)
				)
			)
			console.log(detail)
			console.log(userwidgets.User.Credentials.Register.flaw(detail))
		} else
			this.userwidgetsRegister.emit({
				invite: this.invite,
				credentials: detail,
			})
		this.processing = false
	}

	render() {
		return (
			<Host>
				<slot name={"logo"} />
				<smoothly-form processing={this.processing} looks="border" onSmoothlyFormSubmit={e => this.handleSubmit(e)}>
					<smoothly-input class="email" type="text" name="user" readonly value={this.invite.email}>
						{this.translate("Email")}
					</smoothly-input>
					<smoothly-input type="text" name="name.first">
						{this.translate("First name")}
					</smoothly-input>
					<smoothly-input type="text" name="name.last">
						{this.translate("Last name")}
					</smoothly-input>
					<smoothly-input type="password" name="password.new">
						{this.translate("Password")}
					</smoothly-input>
					<smoothly-input type="password" name="password.repeat">
						{this.translate("Repeat password")}
					</smoothly-input>

					<p slot="submit">
						{this.translate("Already have an account? ")}
						<a
							href={window.origin}
							onClick={async e => (e.preventDefault(), this.invite && this.userwidgetsActiveAccount.emit(true))}>
							{this.translate("Login")}
						</a>
					</p>
					<smoothly-submit disabled={this.processing} color="primary" slot="submit">
						{this.translate("Register")}
					</smoothly-submit>
				</smoothly-form>
			</Host>
		)
	}
}
