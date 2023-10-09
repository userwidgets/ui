import { Component, Event, EventEmitter, h, Host, Prop, State } from "@stencil/core"
// import { langly } from "langly"
import { smoothly } from "smoothly"
import { userwidgets } from "@userwidgets/model"
import { model } from "../../../model"
// import * as translation from "./translation"

// interface Change {
// 	password: userwidgets.User.Password.Change
// }

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
	// @State() translate: langly.Translate = translation.create(document.documentElement)
	@Event() notice: EventEmitter<smoothly.Notice>

	async componentWillLoad() {
		this.state.me.listen("key", key => (this.token = key))
		// this.state.locales.listen("language", language => language && (this.translate = translation.create(language)))
	}
	editStart(event: CustomEvent) {
		event.stopPropagation()
		this.change = { old: "" } //fix
	}
	editEnd(event?: CustomEvent) {
		event?.stopPropagation()
		this.change = undefined
	}
	inputHandler(event: CustomEvent<smoothly.Data>) {
		if (this.change)
			this.change = { ...this.change, ...(typeof event.detail.password == "object" && event.detail.password) }
		console.log("inputHandler, this.change", this.change, "event.detail", event.detail)
	}
	async submitHandler(event: CustomEvent<smoothly.Data>) {
		this.inputHandler(event)
		const password = this.change
		if (!userwidgets.User.Password.Change.is(password)) {
			//translate
			this.notice.emit(smoothly.Notice.failed("not password change"))
		} else if (!this.token) {
			this.notice.emit(smoothly.Notice.failed("Need a token"))
		} else if (!(await this.state.users.update(this.token.email, { password }))) {
			this.notice.emit(smoothly.Notice.failed("failed to update password"))
		} else {
			this.notice.emit(smoothly.Notice.succeeded("Success"))
			this.change = undefined
			this.request = undefined
		}
	}
	render() {
		return (
			<Host>
				<smoothly-form
					looks="border"
					onSmoothlyFormInput={e => this.inputHandler(e)}
					onSmoothlyFormSubmit={e => this.submitHandler(e)}>
					<smoothly-input type="password" readonly={!this.change} name="password.old">
						{/* translate */}
						Old password
					</smoothly-input>
					<smoothly-input type="password" readonly={!this.change} name="password.new">
						New password
					</smoothly-input>
					<smoothly-input type="password" readonly={!this.change} name="password.repeat">
						Repeat new password
					</smoothly-input>
					<userwidgets-edit-button
						slot="submit"
						state={this.state}
						disabled={!!this.request}
						changed={!!this.change}
						onUserwidgetsEditStart={e => this.editStart(e)}
						onUserwidgetsEditEnd={e => this.editEnd(e)}
					/>
				</smoothly-form>
			</Host>
		)
	}
}
