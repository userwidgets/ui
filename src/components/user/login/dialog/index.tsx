import { Component, Event, EventEmitter, h } from "@stencil/core"
import { Notice } from "smoothly"
import { model } from "../../../../model"

@Component({
	tag: "userwidget-login-dialog",
	styleUrl: "style.css",
	scoped: true,
})
export class Login {
	@Event() notice: EventEmitter<Notice>
	@Event() login: EventEmitter<model.userwidgets.User.Credentials>

	handleSubmit(event: CustomEvent<Record<string, string>>) {
		if (!model.userwidgets.User.Credentials.is(event.detail))
			this.notice.emit(Notice.warn("Both email and password is required to login."))
		else if (!event.detail.user.match(/^\S+@\S+$/))
			this.notice.emit(Notice.warn("Provided email is not an email."))
		else
			this.login.emit(event.detail)
	}

	render() {
		return (
			<div class="page background">
				<div class="viewport background">
					<form>
						<smoothly-input type="email" name="user">
							Email
						</smoothly-input>
						<smoothly-input type="password" name="password">
							Password
						</smoothly-input>
						<smoothly-submit prevent={true} onSubmit={this.handleSubmit.bind(this) as any}>
							Login
						</smoothly-submit>
					</form>
				</div>
			</div>
		)
	}
}
