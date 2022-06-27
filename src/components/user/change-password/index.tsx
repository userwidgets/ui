import { Component, Event, EventEmitter, h, Listen } from "@stencil/core"
import * as gracely from "gracely"
import { Notice } from "smoothly"
import { PasswordChange } from "../../../../model/User/PasswordChange"
import { client } from "../../../client"

@Component({
	tag: "uw-change-password",
	styleUrl: "style.css",
	scoped: true,
})
export class ChangePassword {
	@Event() notice: EventEmitter<Notice>
	@Listen("submit")
	async handleSubmit(event: CustomEvent<{ old: string; new: string; repeat: string }>) {
		event.preventDefault()
		event.stopPropagation()
		const passwords = Object.fromEntries(new FormData(event.target as HTMLFormElement))
		if (!PasswordChange.is(passwords))
			this.notice.emit(Notice.warn("Missing fields."))
		else if (passwords.new != passwords.repeat)
			this.notice.emit(Notice.warn("New password was not repeated correctly."))
		else {
			const key = await client.fullKey
			if (key) {
				const response = await client.user.changePassword(key.email, passwords)
				if (gracely.Error.is(response)) {
					this.notice.emit(Notice.warn("Old passwords did not match."))
				}
			}
		}
	}
	render() {
		return (
			<form>
				<smoothly-input name="old" type="password">
					Old password
				</smoothly-input>
				<smoothly-input name="new" type="password">
					New password
				</smoothly-input>
				<smoothly-input name="repeat" type="password">
					Repeat password
				</smoothly-input>
				<smoothly-submit>Change password</smoothly-submit>
			</form>
		)
	}
}
