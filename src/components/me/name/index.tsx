import { Component, Event, EventEmitter, h, Host, Prop, State } from "@stencil/core"
import { langly } from "langly"
import { smoothly } from "smoothly"
import { SmoothlyFormCustomEvent } from "smoothly/dist/types/components"
import { userwidgets } from "@userwidgets/model"
import { model } from "../../../model"
import * as translation from "./translation"

// TODO make adjustments and test when new smoothly changes to form are in

@Component({
	tag: "userwidgets-me-name",
	styleUrl: "style.css",
	scoped: true,
})
export class UserwidgetsMeName {
	@Prop() state: model.State
	@Prop() user: userwidgets.User | undefined
	@State() token?: userwidgets.User.Key | false
	@State() request?: ReturnType<typeof this.state.users.update>
	@State() translate: langly.Translate = translation.create(document.documentElement)
	@Event() notice: EventEmitter<smoothly.Notice>

	async componentWillLoad() {
		this.state.me.listen("key", key => (this.token = key))
		this.state.locales.listen("language", language => language && (this.translate = translation.create(language)))
	}
	async submitHandler(
		event: SmoothlyFormCustomEvent<{ type: "update" | "change" | "fetch" | "create" | "remove"; value: smoothly.Data }>
	) {
		const name = userwidgets.User.Name.type.get(event.detail.value.name)
		if (!name) {
			const message = `${this.translate("Malformed name.")}`
			this.notice.emit(smoothly.Notice.failed(message))
			console.log("Change name flaw", userwidgets.User.Name.flaw(name))
		} else if (!this.token) {
			const message = `${this.translate("Need a token")}`
			this.notice.emit(smoothly.Notice.failed(message))
		} else if (!(await (this.request = this.state.users.update(this.user?.email ?? this.token.email, { name })))) {
			const message = `${this.translate("Failed to update name")}`
			this.notice.emit(smoothly.Notice.failed(message))
		} else {
			const message = `${this.translate("Your name has been updated")}`
			this.notice.emit(smoothly.Notice.succeeded(message))
		}
		this.request = undefined
	}
	render() {
		return (
			<Host>
				<smoothly-form
					processing={!!this.request}
					looks={"border"}
					type={"update"}
					readonly
					onSmoothlyFormSubmit={e => this.submitHandler(e)}>
					<slot />
					<smoothly-input
						name={"name.first"}
						value={this.user ? this.user.name.first : this.token ? this.token.name.first : null}>
						{this.translate("First name")}
					</smoothly-input>
					<smoothly-input
						name={"name.last"}
						value={this.user ? this.user.name.last : this.token ? this.token.name.last : null}>
						{this.translate("Last name")}
					</smoothly-input>
					<smoothly-input-edit slot={"edit"} type={"button"} size={"icon"} color={"primary"} fill={"default"} />
					<smoothly-input-reset slot={"reset"} type={"form"} size={"icon"} color={"warning"} fill={"default"} />
					<smoothly-input-submit slot={"submit"} size={"icon"} color={"success"} fill={"default"} />
				</smoothly-form>
			</Host>
		)
	}
}
