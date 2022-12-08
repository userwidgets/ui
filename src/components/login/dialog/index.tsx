import { Component, Event, EventEmitter, h, Prop, State } from "@stencil/core"
import * as langly from "langly"
import { Notice } from "smoothly"
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
	@Event() login: EventEmitter<model.userwidgets.User.Credentials>
	@State() translate: langly.Translate = translation.create("en")

	componentWillLoad() {
		this.state.listen("language", language => (this.translate = translation.create(language)))
	}
	handleSubmit(event: CustomEvent<Record<string, string>>) {
		if (!model.userwidgets.User.Credentials.is(event.detail))
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
					<form>
						<smoothly-input type="email" name="user">
							{this.translate("Email")}
						</smoothly-input>
						<smoothly-input type="password" name="password">
							{this.translate("Password")}
						</smoothly-input>
						<smoothly-submit prevent={true} onSubmit={this.handleSubmit.bind(this) as any}>
							{this.translate("Login")}
						</smoothly-submit>
					</form>
				</div>
			</div>
		)
	}
}
