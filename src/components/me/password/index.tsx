import { Component, Event, EventEmitter, h, Host, Prop, State } from "@stencil/core"
import { langly } from "langly"
import { smoothly } from "smoothly"
import { userwidgets } from "@userwidgets/model"
import { model } from "../../../model"
import * as translation from "./translation"

@Component({
	tag: "userwidgets-password-change",
	styleUrl: "style.css",
	scoped: true,
})
export class UserwidgetsPasswordChange {
	private form?: HTMLSmoothlyFormElement
	@Prop() state: model.State
	@State() token?: userwidgets.User.Key | false
	@State() change: Partial<userwidgets.User.Password.Change> = { old: "", new: "", repeat: "" }
	@State() request?: ReturnType<typeof this.state.users.update>
	@State() translate: langly.Translate = translation.create(document.documentElement)
	@Event() notice: EventEmitter<smoothly.Notice>

	async componentWillLoad() {
		this.state.me.listen("key", key => (this.token = key))
		this.state.locales.listen("language", language => language && (this.translate = translation.create(language)))
	}
	inputHandler(event: CustomEvent<smoothly.Data>) {
		event.stopPropagation()
		if (this.change)
			this.change = { ...this.change, ...(typeof event.detail.password == "object" && event.detail.password) }
	}
	async submitHandler(event: CustomEvent<smoothly.Data>) {
		event.stopPropagation()
		this.inputHandler(event)
		const password = userwidgets.User.Password.Change.type.get(this.change)
		if (!password) {
			const message = `${this.translate("Malformed name.")}`
			this.notice.emit(smoothly.Notice.failed(message))
			console.log("password flaw", userwidgets.User.Password.Change.flaw(password))
		} else if (!this.token) {
			const message = `${this.translate("Need a token")}`
			this.notice.emit(smoothly.Notice.failed(message))
		} else if (!(await (this.request = this.state.users.update(this.token.email, { password })))) {
			const message = `${this.translate("Failed to update password")}`
			this.notice.emit(smoothly.Notice.failed(message))
		} else {
			const message = `${this.translate("Your password has been updated")}`
			this.notice.emit(smoothly.Notice.succeeded(message))
			this.change = { old: "", new: "", repeat: "" }
			this.form?.clear()
		}
		this.request = undefined
	}
	render() {
		const submittable = this.change.new && this.change.repeat && this.change.new == this.change.repeat
		return (
			<Host>
				<smoothly-form
					ref={e => (this.form = e)}
					processing={!!this.request}
					looks="border"
					onSmoothlyFormInput={e => this.inputHandler(e)}
					onSmoothlyFormSubmit={e => this.submitHandler(e)}>
					<slot />
					<input type="email" name="email" value={(this.token || undefined)?.email} />
					<smoothly-input type="password" name="password.old">
						{this.translate("Old password")}
					</smoothly-input>
					<smoothly-input type="password" name="password.new">
						{this.translate("New password")}
					</smoothly-input>
					<smoothly-input type="password" name="password.repeat">
						{this.translate("Repeat new password")}
					</smoothly-input>
					<smoothly-input-clear
						type="form"
						color="danger"
						fill="solid"
						slot="clear"
						disabled={!Object.values(this.change).some(v => v?.length > 0)}>
						Clear
					</smoothly-input-clear>
					<smoothly-submit
						title={!submittable ? "New and repeated passwords must match" : ""}
						slot="submit"
						color="success"
						size="small"
						fill="solid"
						disabled={!submittable}>
						Submit
					</smoothly-submit>
				</smoothly-form>
			</Host>
		)
	}
}
