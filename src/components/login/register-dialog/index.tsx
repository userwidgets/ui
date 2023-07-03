import { Component, Event, EventEmitter, Fragment, h, Host, Prop, State } from "@stencil/core"
import * as isoly from "isoly"
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
	@Prop() invite?: userwidgets.User.Invite
	@State() key?: userwidgets.User.Key
	@Prop() state: model.State
	@Event() notice: EventEmitter<smoothly.Notice>
	@Event() userwidgetsRegister: EventEmitter<{
		invite: userwidgets.User.Invite
		credentials: userwidgets.User.Credentials.Register
	}>
	@Event() userwidgetsActiveAccount: EventEmitter<boolean>
	@State() translate: langly.Translate = translation.create("en")

	async componentWillLoad() {
		this.state.locales.listen("language", language => (this.translate = translation.create(language)))
	}

	async handleSubmit(event: CustomEvent<model.Data>) {
		event.preventDefault()
		event.stopPropagation()
		!this.invite ||
		!userwidgets.User.Password.Set.is(event.detail) ||
		!userwidgets.User.Password.Set.validate(event.detail)
			? this.notice.emit(
					smoothly.Notice.warn(
						this.translate("Password and Repeat password must be identical and at least 6 characters long.")
					)
			  )
			: this.userwidgetsRegister.emit({
					invite: this.invite,
					credentials: {
						user: this.invite.email,
						name: {
							first: event.detail.first,
							last: event.detail.last,
						},
						password: {
							new: event.detail.new,
							repeat: event.detail.repeat,
						},
					},
			  })
	}

	render() {
		return (
			<Host>
				{!this.invite ? null : this.invite.expires < isoly.DateTime.now() ? (
					<p>
						{this.translate("This invitation is expired. Back to ")}
						<a onClick={e => e.preventDefault()}>{this.translate("home")}</a>.
					</p>
				) : this.invite.active ? null : (
					<Fragment>
						<smoothly-form looks="line">
							<smoothly-input type="text" readonly value={this.invite.email}>
								{this.translate("Email")}
							</smoothly-input>
						</smoothly-form>

						<smoothly-form looks="line" onSmoothlyFormSubmit={e => this.handleSubmit(e)}>
							<smoothly-input type="text" name="first">
								{this.translate("First name")}
							</smoothly-input>
							<smoothly-input type="text" name="last">
								{this.translate("Last name")}
							</smoothly-input>
							<smoothly-input type="password" name="new">
								{this.translate("Password")}
							</smoothly-input>
							<smoothly-input type="password" name="repeat">
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
							<smoothly-submit slot="submit">{this.translate("Register")}</smoothly-submit>
						</smoothly-form>
					</Fragment>
				)}
			</Host>
		)
	}
}
