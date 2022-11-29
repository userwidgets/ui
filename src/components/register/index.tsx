import { Component, Event, EventEmitter, h, Prop, State } from "@stencil/core"
import * as isoly from "isoly"
import * as langly from "langly"
import { Notice, redirect } from "smoothly"
import { href } from "stencil-router-v2"
import { model } from "../../model"
import * as translation from "./translation"
@Component({
	tag: "userwidgets-register",
	styleUrl: "style.css",
	scoped: true,
})
export class UserwidgetsRegister {
	@State() tag?: model.userwidgets.User.Tag
	@State() key?: model.userwidgets.User.Key
	@Prop() state: model.State
	@Event() notice: EventEmitter<Notice>
	@State() language?: isoly.Language
	@State() t: langly.Translate

	async componentWillLoad() {
		const token = new URL(window.location.href).searchParams.get("id")
		model.userwidgets.User.Tag.unpack((token?.split(".").length != 3 ? `${token}.` : token) ?? "").then(tag => {
			!(this.tag = tag) ? redirect(window.origin) : this.tag.active && this.state.me.join(this.tag)
		})
		console.log(this.state.language)
		this.state.listen("language", language => (this.t = translation.create(language)))
		console.log(this.state.language)
	}

	async handleSubmit(event: CustomEvent<{ [key: string]: string }>) {
		event.preventDefault()
		event.stopPropagation()
		!this.tag || !model.userwidgets.User.Password.Set.validate({ new: event.detail.new, repeat: event.detail.repeat })
			? this.notice.emit(
					Notice.warn(this.t("Password and Repeat password must be identical and at least 6 characters long."))
			  )
			: (await this.state.me.register(this.tag, {
					user: this.tag.email,
					name: {
						first: event.detail.first,
						last: event.detail.last,
					},
					password: {
						new: event.detail.new,
						repeat: event.detail.repeat,
					},
			  })) && redirect(window.origin)
	}

	render() {
		return !this.tag ? null : this.tag.expires < isoly.DateTime.now() ? (
			<div>
				<p>
					{this.t("This invitation is expired. Back to ")}
					<a {...href(window.origin)} onClick={e => e.preventDefault()}>
						{this.t("home")}
					</a>
					.
				</p>
			</div>
		) : this.tag.active ? null : (
			<form onSubmit={e => e.preventDefault()}>
				<div class="inputs">
					<smoothly-input type="text" name="first">
						{this.t("First name")}
					</smoothly-input>
					<smoothly-input type="text" name="last">
						{this.t("Last name")}
					</smoothly-input>
				</div>
				<div class="inputs">
					<smoothly-input type="password" name="new">
						{this.t("Password")}
					</smoothly-input>
					<smoothly-input type="password" name="repeat">
						{this.t("Repeat password")}
					</smoothly-input>
				</div>
				<div class="buttons">
					<smoothly-submit onSubmit={e => this.handleSubmit(e as CustomEvent<{ [key: string]: string }>)}>
						{this.t("Register")}
					</smoothly-submit>
					<p>
						{this.t("Already have an account? ")}
						<a
							href={window.origin}
							onClick={async e => {
								e.preventDefault()
								this.tag &&
									(await this.state.me.join(this.tag).then(p => p)) &&
									(await this.state.me.join(this.tag)) &&
									redirect(window.origin)
							}}>
							{this.t("Login")}
						</a>
					</p>
				</div>
			</form>
		)
	}
}
