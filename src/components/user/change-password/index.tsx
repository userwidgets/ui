import { Component, Event, EventEmitter, h, Listen, Prop, State } from "@stencil/core"
import * as gracely from "gracely"
import { Notice } from "smoothly"
import { client } from "../../../client"
import { model } from "../../../model"
import { Me } from "../../../State"
import { Application } from "../../../State/Application"
import { Listenable } from "../../../State/Listenable"
import { Options } from "../../../State/Options"
@Component({
	tag: "userwidgets-change-password",
	styleUrl: "style.css",
	scoped: true,
})
export class ChangePassword {
	@State() key?: model.userwidgets.User.Key
	@Event() notice: EventEmitter<Notice>
	@Prop() state: {
		me: Me & Listenable<Me>
		application: Application & Listenable<Application>
		options: Options
	}
	async componentWillLoad(): Promise<void> {
		this.state.me.listen("key", async promise => {
			const key = await promise
			this.key = key ? key : undefined
		})
	}
	@Listen("submit")
	async handleSubmit(event: CustomEvent<{ old: string; new: string; repeat: string }>) {
		event.preventDefault()
		event.stopPropagation()
		const passwords = Object.fromEntries(new FormData(event.target as HTMLFormElement))
		if (!model.userwidgets.User.Password.Change.is(passwords))
			this.notice.emit(Notice.failed("Missing fields."))
		else if (passwords.new != passwords.repeat)
			this.notice.emit(Notice.failed("New password was not repeated correctly."))
		else {
			const key = await client.fullKey
			if (key) {
				this.notice.emit(
					Notice.execute("Changing password.", async () => {
						const response = await client.user.changePassword(key.email, passwords)
						return gracely.Error.is(response) ? [false, "Failed to change password."] : [true, "Password changed"]
					})
				)
			}
		}
	}
	render() {
		return (
			<form>
				Change password for user <code>{this.key?.email}</code>
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
