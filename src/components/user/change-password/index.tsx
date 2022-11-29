import { Component, Event, EventEmitter, h, Listen, Prop, State } from "@stencil/core"
import * as gracely from "gracely"
import * as langly from "langly"
import { Notice } from "smoothly"
import { client } from "../../../client"
import { model } from "../../../model"
import * as translation from "./translation"
@Component({
	tag: "userwidgets-change-password",
	styleUrl: "style.css",
	scoped: true,
})
export class ChangePassword {
	@State() key?: model.userwidgets.User.Key
	@Event() notice: EventEmitter<Notice>
	@Prop() state: model.State
	@State() t: langly.Translate
	async componentWillLoad(): Promise<void> {
		this.state.me.listen("key", async promise => {
			const key = await promise
			this.key = key ? key : undefined
		})
		this.state.listen("language", language => (this.t = translation.create(language)))
	}
	@Listen("submit")
	async handleSubmit(event: CustomEvent<{ old: string; new: string; repeat: string }>) {
		event.preventDefault()
		event.stopPropagation()
		const passwords = Object.fromEntries(new FormData(event.target as HTMLFormElement))
		if (!model.userwidgets.User.Password.Change.is(passwords))
			this.notice.emit(Notice.failed(this.t("Missing fields.")))
		else if (passwords.new != passwords.repeat)
			this.notice.emit(Notice.failed(this.t("New password was not repeated correctly.")))
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
				{this.t("Change password for user ")}
				<code>{this.key?.email}</code>
				<smoothly-input name="old" type="password">
					{this.t("Old password")}
				</smoothly-input>
				<smoothly-input name="new" type="password">
					{this.t("New password")}
				</smoothly-input>
				<smoothly-input name="repeat" type="password">
					{this.t("Repeat password")}
				</smoothly-input>
				<smoothly-submit>{this.t("Change password")}</smoothly-submit>
			</form>
		)
	}
}
