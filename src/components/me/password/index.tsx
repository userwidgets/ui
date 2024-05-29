import { Component, ComponentWillLoad, Event, EventEmitter, h, Host, Prop, State, VNode } from "@stencil/core"
import { langly } from "langly"
import { smoothly } from "smoothly"
import { SmoothlyFormCustomEvent } from "smoothly/dist/types/components"
import { userwidgets } from "@userwidgets/model"
import { model } from "../../../model"
import * as translation from "./translation"

// TODO if-match issue
@Component({
	tag: "userwidgets-password-change",
	styleUrl: "style.css",
	scoped: true,
})
export class UserwidgetsPasswordChange implements ComponentWillLoad {
	@Prop() state: model.State
	@State() token?: userwidgets.User.Key | false
	@State() translate: langly.Translate = translation.create(document.documentElement)
	@Event() notice: EventEmitter<smoothly.Notice>

	componentWillLoad(): void {
		this.state.me.listen("key", key => (this.token = key))
		this.state.locales.listen("language", language => language && (this.translate = translation.create(language)))
	}
	async submitHandler(event: SmoothlyFormCustomEvent<smoothly.Submit>): Promise<void> {
		event.stopPropagation()
		console.log("event.detail.value: ", event.detail.value)
		const password = userwidgets.User.Password.Change.type.get(event.detail.value)
		if (!password) {
			const message = `${this.translate("Malformed name.")}`
			this.notice.emit(smoothly.Notice.failed(message))
			console.log("password flaw", userwidgets.User.Password.Change.flaw(password))
		} else if (!this.token) {
			const message = `${this.translate("Need a token")}`
			this.notice.emit(smoothly.Notice.failed(message))
		} else {
			const result = await this.state.users.update(this.token.email, { password })
			if (!result) {
				const message = `${this.translate("Failed to update password")}`
				this.notice.emit(smoothly.Notice.failed(message))
			} else {
				const message = `${this.translate("Your password has been updated")}`
				this.notice.emit(smoothly.Notice.succeeded(message))
				event.detail.result(true)
			}
		}
		event.detail.result(false)
	}
	render(): VNode | VNode[] {
		return (
			<Host>
				<smoothly-form looks={"border"} type={"create"} onSmoothlyFormSubmit={e => this.submitHandler(e)}>
					<slot />
					<input type={"email"} name={"email"} value={(this.token || undefined)?.email} />
					<smoothly-input type={"password"} name={"old"}>
						{this.translate("Old password")}
					</smoothly-input>
					<smoothly-input type={"password"} name={"new"}>
						{this.translate("New password")}
					</smoothly-input>
					<smoothly-input type={"password"} name={"repeat"}>
						{this.translate("Repeat new password")}
					</smoothly-input>
					<smoothly-input-edit slot={"edit"} type={"button"} size={"icon"} color={"primary"} fill={"default"} />
					<smoothly-input-reset slot={"reset"} type={"form"} size={"icon"} color={"warning"} fill={"default"} />
					<smoothly-input-submit slot={"submit"} size={"icon"} color={"success"} fill={"default"} />
				</smoothly-form>
			</Host>
		)
	}
}
