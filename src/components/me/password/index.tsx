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
	@Prop() state: model.State
	@Prop() user: userwidgets.User | undefined
	@State() token?: userwidgets.User.Key | false
	@State() change?: Partial<userwidgets.User.Password.Change>
	@State() request?: ReturnType<typeof this.state.users.update>
	@State() translate: langly.Translate = translation.create(document.documentElement)
	private form?: HTMLSmoothlyFormElement
	@Event() notice: EventEmitter<smoothly.Notice>

	async componentWillLoad() {
		this.state.me.listen("key", key => (this.token = key))
		this.state.locales.listen("language", language => language && (this.translate = translation.create(language)))
	}
	editStart(event: CustomEvent) {
		event.stopPropagation()
		this.change = {}
	}
	editEnd(event?: CustomEvent) {
		event?.stopPropagation()
		this.change = undefined
	}
	inputHandler(event: CustomEvent<smoothly.Data>) {
		if (this.change)
			this.change = { ...this.change, ...(typeof event.detail.password == "object" && event.detail.password) }
	}
	async submitHandler(event: CustomEvent<smoothly.Data>) {
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
			this.change = undefined
			this.form?.clear()
		}
		this.request = undefined
	}
	render() {
		return (
			<Host>
				<smoothly-form
					ref={e => (this.form = e)}
					processing={!!this.request}
					looks="border"
					onSmoothlyFormInput={e => this.inputHandler(e)}
					onSmoothlyFormSubmit={e => this.submitHandler(e)}>
					<smoothly-input type="password" readonly={!this.change} name="password.old">
						{this.translate("Old password")}
					</smoothly-input>
					<smoothly-input type="password" readonly={!this.change} name="password.new">
						{this.translate("New password")}
					</smoothly-input>
					<smoothly-input type="password" readonly={!this.change} name="password.repeat">
						{this.translate("Repeat new password")}
					</smoothly-input>
					<userwidgets-edit-button
						slot="submit"
						state={this.state}
						disabled={!!this.request || !this.change?.old || !this.change?.new || !this.change?.repeat}
						changed={!!this.change}
						onUserwidgetsEditStart={e => this.editStart(e)}
						onUserwidgetsEditEnd={e => this.editEnd(e)}
					/>
				</smoothly-form>
			</Host>
		)
	}
}
