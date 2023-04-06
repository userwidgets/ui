import { Component, Event, EventEmitter, h, Prop, State } from "@stencil/core"
import * as langly from "langly"
import { Notice } from "smoothly"
import { userwidgets } from "@userwidgets/model"
import { model } from "../../../model"
import * as translation from "./translation"
@Component({
	tag: "userwidgets-login-dialog",
	styleUrl: "style.css",
	scoped: true,
})
export class UserwidgetsLoginDialog {
	@Prop() state: model.State
	@Event() notice: EventEmitter<Notice>
	@Event() login: EventEmitter<userwidgets.User.Credentials>
	@State() translate: langly.Translate = translation.create("en")

	componentWillLoad() {
		this.state.listen("language", language => (this.translate = translation.create(language)))
	}
	handleSubmit(event: CustomEvent) {
		event.preventDefault()
		if (!userwidgets.User.Credentials.is(event.detail))
			this.notice.emit(Notice.warn(this.translate("Both email and password is required to login.")))
		else if (!event.detail.user.match(/^\S+@\S+$/))
			this.notice.emit(Notice.warn(this.translate("Provided email is not an email.")))
		else
			this.login.emit(event.detail)
	}

	render() {
		return (
			<div class="page background">
				<div class="viewport background">
					<smoothly-form onSmoothlyFormSubmit={(e: CustomEvent) => this.handleSubmit(e)}>
						<smoothly-input type="email" name="user">
							{this.translate("Email")}
						</smoothly-input>
						<smoothly-input type="password" name="password">
							{this.translate("Password")}
						</smoothly-input>
						<smoothly-submit>{this.translate("Login")}</smoothly-submit>
					</smoothly-form>
				</div>
			</div>
		)
	}
}
