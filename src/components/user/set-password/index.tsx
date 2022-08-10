import { Component, Event, EventEmitter, h, Listen, Prop, State } from "@stencil/core"
import * as gracely from "gracely"
import { Notice } from "smoothly"
import { client } from "../../../client"
import { model } from "../../../model"

@Component({
	tag: "userwidgets-set-password",
	styleUrl: "style.css",
	scoped: true,
})
export class SetPassword {
	@Prop() user: model.userwidgets.User
	@Event() notice: EventEmitter<Notice>
	@State() new: string
	@State() repeat: string
	@Listen("smoothlyInput")
	handleSmoothlyInput(event: CustomEvent<{ name: "new" | "repeat"; value: string }>) {
		event.detail.name == "new" ? (this.new = event.detail.value) : (this.repeat = event.detail.value)
	}
	@Listen("submit")
	async handleSmoothlySubmit(event: Event) {
		event.preventDefault()
		event.stopPropagation()
		const passwords = Object.fromEntries(new FormData(event.target as HTMLFormElement))
		if (!model.userwidgets.User.Password.Change.is(passwords))
			this.notice.emit(Notice.warn("Missing fields."))
		else if (passwords.new != passwords.repeat)
			this.notice.emit(Notice.warn("New password was not repeated correctly."))
		else {
			const response = await client.user.changePassword(this.user.email, passwords)
			if (gracely.Error.is(response)) {
				this.notice.emit(Notice.warn(response.body))
			}
		}
	}

	render() {
		return (
			<from>
				<smoothly-input type="password" name="new" value={this.new}></smoothly-input>
				<smoothly-input type="password" name="repeat" value={this.repeat}></smoothly-input>
				<smoothly-submit disabled={this.new != this.repeat || this.new.length == 0}></smoothly-submit>
			</from>
		)
	}
}
