import { Component, Event, EventEmitter, h, Prop, State } from "@stencil/core"
import * as isoly from "isoly"
import * as langly from "langly"
import { Notice } from "smoothly"
import { redirect } from "smoothly"
import { userwidgets } from "@userwidgets/model"
import { href } from "stencil-router-v2"
import { model } from "../../model"
import * as translation from "./translation"

type registerData = {
	tag: userwidgets.User.Tag
	credentials: userwidgets.User.Credentials.Register
}
@Component({
	tag: "userwidgets-register",
	styleUrl: "style.css",
	scoped: true,
})
export class UserwidgetsRegister {
	@State() tag?: userwidgets.User.Tag
	@State() key?: userwidgets.User.Key
	@Prop() state: model.State
	@Prop() jwt: userwidgets.User.Tag
	@Event() notice: EventEmitter<Notice>
	@Event() userwidgetsRegister: EventEmitter<registerData>
	@Event() userwidgetsActiveAccount: EventEmitter<userwidgets.User.Tag>
	@State() translate: langly.Translate = translation.create("en")

	async componentWillLoad() {
		const token = new URL(window.location.href).searchParams.get("id")
		userwidgets.User.Tag.unpack((token?.split(".").length != 3 ? `${token}.` : token) ?? "").then(tag => {
			!(this.tag = tag) ? redirect("/") : this.tag.active && this.state.me.join(this.tag)
		})
		this.state.locales.listen("language", language => (this.translate = translation.create(language)))
	}

	async handleSubmit(event: CustomEvent<model.Data>) {
		event.preventDefault()
		event.stopPropagation()
		!this.tag ||
		!userwidgets.User.Password.Set.is(event.detail) ||
		!userwidgets.User.Password.Set.validate(event.detail)
			? this.notice.emit(
					Notice.warn(this.translate("Password and Repeat password must be identical and at least 6 characters long."))
			  )
			: this.userwidgetsRegister.emit({
					tag: this.tag,
					credentials: {
						user: this.tag.email,
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
		return !this.tag ? null : this.tag.expires < isoly.DateTime.now() ? (
			<div>
				<p>
					{this.translate("This invitation is expired. Back to ")}
					<a {...href(window.origin)} onClick={e => e.preventDefault()}>
						{this.translate("home")}
					</a>
					.
				</p>
			</div>
		) : this.tag.active ? null : (
			<smoothly-form looks="line" onSmoothlyFormSubmit={e => this.handleSubmit(e)}>
				<div class="inputs">
					<smoothly-input type="text" name="first">
						{this.translate("First name")}
					</smoothly-input>
					<smoothly-input type="text" name="last">
						{this.translate("Last name")}
					</smoothly-input>
				</div>
				<div class="inputs">
					<smoothly-input type="password" name="new">
						{this.translate("Password")}
					</smoothly-input>
					<smoothly-input type="password" name="repeat">
						{this.translate("Repeat password")}
					</smoothly-input>
				</div>
				<div class="buttons">
					<smoothly-submit>{this.translate("Register")}</smoothly-submit>
					<p>
						{this.translate("Already have an account? ")}
						<a
							href={window.origin}
							onClick={async e => (e.preventDefault(), this.tag && this.userwidgetsActiveAccount.emit(this.tag))}>
							{this.translate("Login")}
						</a>
					</p>
				</div>
			</smoothly-form>
		)
	}
}
