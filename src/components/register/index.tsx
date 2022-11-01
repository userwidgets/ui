import { Component, Event, EventEmitter, h, Prop, State } from "@stencil/core"
import * as isoly from "isoly"
import { Notice, redirect } from "smoothly"
import { href } from "stencil-router-v2"
import { model } from "../../model"
import { Me } from "../../State"
import { Listenable } from "../../State/Listenable"
import { Options } from "../../State/Options"
@Component({
	tag: "userwidgets-register",
	styleUrl: "style.css",
	scoped: true,
})
export class UserwidgetsRegister {
	@State() tag?: model.userwidgets.User.Tag
	@State() key?: model.userwidgets.User.Key
	@Prop() state: {
		me: Me & Listenable<Me>
		options: Options
	}
	@Event() notice: EventEmitter<Notice>

	async componentWillLoad() {
		const token = new URL(window.location.href).searchParams.get("id")
		this.tag = await model.userwidgets.User.Tag.unpack((token?.split(".").length != 3 ? `${token}.` : token) ?? "")
		if (!this.tag)
			redirect(window.origin)
		else {
			this.state.options = { applicationId: this.tag.audience }
			if (this.tag.active)
				this.state.me.join(this.tag)
		}
	}

	async handleSubmit(event: CustomEvent<{ [key: string]: string }>) {
		event.preventDefault()
		event.stopPropagation()
		this.tag &&
			(!model.userwidgets.User.Password.Set.validate({ new: event.detail.new, repeat: event.detail.repeat })
				? this.notice.emit(
						Notice.warn("Password and Repeat password must be identical and at least 6 characters long.")
				  )
				: true) &&
			(await this.state.me.register(this.tag, {
				user: this.tag.email,
				name: {
					first: event.detail.first,
					last: event.detail.last,
				},
				password: {
					new: event.detail.new,
					repeat: event.detail.repeat,
				},
			})) &&
			(this.state.options = { user: this.tag.email }) &&
			redirect(window.origin)
	}

	render() {
		return !this.tag ? null : this.tag.expires < isoly.DateTime.now() ? (
			<div>
				<p>
					This invitation is expired. Back to{" "}
					<a {...href(window.origin)} onClick={e => e.preventDefault()}>
						home
					</a>
					.
				</p>
			</div>
		) : this.tag.active ? null : (
			<form onSubmit={e => e.preventDefault()}>
				<div class="inputs">
					<smoothly-input type="text" name="first">
						First name
					</smoothly-input>
					<smoothly-input type="text" name="last">
						Last name
					</smoothly-input>
				</div>
				<div class="inputs">
					<smoothly-input type="password" name="new">
						Password
					</smoothly-input>
					<smoothly-input type="password" name="repeat">
						Repeat password
					</smoothly-input>
				</div>
				<div class="buttons">
					<smoothly-submit onSubmit={e => this.handleSubmit(e as CustomEvent<{ [key: string]: string }>)}>
						Register
					</smoothly-submit>
					<p>
						Already have an account?{" "}
						<a
							href={window.origin}
							onClick={async e => {
								e.preventDefault()
								this.tag &&
									(await this.state.me.join(this.tag).then(p => p)) &&
									(await this.state.me.join(this.tag)) &&
									redirect(window.origin)
							}}>
							Login
						</a>
					</p>
				</div>
			</form>
		)
	}
}
