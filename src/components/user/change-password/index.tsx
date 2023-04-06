import { Component, Event, EventEmitter, h, Listen, Prop, State } from "@stencil/core"
import * as gracely from "gracely"
import * as langly from "langly"
import { Notice } from "smoothly"
import { userwidgets } from "@userwidgets/model"
import { client } from "../../../client"
import { model } from "../../../model"
import * as translation from "./translation"
@Component({
	tag: "userwidgets-change-password",
	styleUrl: "style.css",
	scoped: true,
})
export class ChangePassword {
	@State() key?: userwidgets.User.Key
	@Event() notice: EventEmitter<Notice>
	@Prop() state: model.State
	@State() translate: langly.Translate = translation.create("en")
	async componentWillLoad(): Promise<void> {
		this.state.me.listen("key", async promise => {
			const key = await promise
			this.key = key ? key : undefined
		})
		this.state.locales.listen("language", language => (this.translate = translation.create(language)))
	}

	async handleSubmit(event: CustomEvent<{ old: string; new: string; repeat: string }>) {
		event.preventDefault()
		event.stopPropagation()
		const passwords = Object.fromEntries(new FormData(event.target as HTMLFormElement))
		if (!userwidgets.User.Password.Change.is(passwords))
			this.notice.emit(Notice.failed(this.translate("Missing fields.")))
		else if (passwords.new != passwords.repeat)
			this.notice.emit(Notice.failed(this.translate("New password was not repeated correctly.")))
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
			<smoothly-form onSmoothlyFormSubmit={(e: CustomEvent) => this.handleSubmit(e)}>
				{this.translate("Change password for user ")}
				<code>{this.key?.email}</code>
				<smoothly-input name="old" type="password">
					{this.translate("Old password")}
				</smoothly-input>
				<smoothly-input name="new" type="password">
					{this.translate("New password")}
				</smoothly-input>
				<smoothly-input name="repeat" type="password">
					{this.translate("Repeat password")}
				</smoothly-input>
				<smoothly-submit>{this.translate("Change password")}</smoothly-submit>
			</smoothly-form>
		)
	}
}
