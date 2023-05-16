import { Component, Event, EventEmitter, h, Prop, State } from "@stencil/core"
import * as isoly from "isoly"
import * as langly from "langly"
import { Notice } from "smoothly"
import { userwidgets } from "@userwidgets/model"
import { href } from "stencil-router-v2"
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
	@Event() notice: EventEmitter<Notice>
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
					Notice.warn(this.translate("Password and Repeat password must be identical and at least 6 characters long."))
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
		return !this.invite ? null : this.invite.expires < isoly.DateTime.now() ? (
			<div>
				<p>
					{this.translate("This invitation is expired. Back to ")}
					<a {...href(window.origin)} onClick={e => e.preventDefault()}>
						{this.translate("home")}
					</a>
					.
				</p>
			</div>
		) : this.invite.active ? null : (
			[
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

					<smoothly-submit>{this.translate("Register")}</smoothly-submit>
				</smoothly-form>,
				<p>
					{this.translate("Already have an account? ")}
					<a
						href={window.origin}
						onClick={async e => (e.preventDefault(), this.invite && this.userwidgetsActiveAccount.emit(true))}>
						{this.translate("Login")}
					</a>
				</p>,
			]
		)
	}
}
