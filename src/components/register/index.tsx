import { Component, Event, EventEmitter, h, State } from "@stencil/core"
import * as isoly from "isoly"
import { href } from "stencil-router-v2"
import { model } from "../../model"
import { state } from "../../State"

@Component({
	tag: "userwidgets-register",
	styleUrl: "style.css",
	scoped: true,
})
export class UserwidgetsRegister {
	@State() tag?: model.userwidgets.User.Tag
	@State() key?: model.userwidgets.User.Key
	@Event() click: EventEmitter<void>
	async componentWillLoad() {
		const token = new URL(window.location.href).searchParams.get("id")
		this.tag = await model.userwidgets.User.Tag.unpack((token?.split(".").length != 3 ? `${token}.` : token) ?? "")
		if (!this.tag)
			window.location.href = window.origin
		else {
			state.options = { applicationId: this.tag.audience }
			if (this.tag.active)
				state.me.join(this.tag)
		}
	}

	async handleSubmit(event: CustomEvent<{ [key: string]: string }>) {
		event.preventDefault()
		event.stopPropagation()
		if (this.tag) {
			const response = await state.me.register(this.tag, {
				user: this.tag.email,
				name: {
					first: event.detail.first,
					last: event.detail.last,
				},
				password: {
					new: event.detail.new,
					repeat: event.detail.repeat,
				},
			})
			if (response)
				window.location.href = window.origin
		}
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
							href="#"
							onClick={async e => {
								e.preventDefault()
								console.log("login starting!", this.tag)
								if (this.tag) {
									console.log("first onion")
									const key = await state.me.join(this.tag).then(p => {
										console.log("login finished")
										return p
									})
									console.log("awaited")
									if (key) {
										console.log("successful login", key)
									} else {
										console.log("login failed")
									}
								}
								this.tag && (await state.me.join(this.tag)) && (window.location.href = window.origin)
							}}>
							Login
						</a>
					</p>
				</div>
			</form>
		)
	}
}
