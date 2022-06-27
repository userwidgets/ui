import { Component, Event, EventEmitter, h, Listen } from "@stencil/core"
import { Notice } from "smoothly"
import { UserCredentials } from "../UserCredentials"

@Component({
	tag: "uw-login-dialog",
	styleUrl: "style.css",
	scoped: true,
})
export class Login {
	@Event() notice: EventEmitter<Notice>
	@Event() login: EventEmitter<UserCredentials>
	@Listen("submit")
	async handleSubmit(event: CustomEvent<Record<string, string>>) {
		event.preventDefault()
		const credentials = Object.fromEntries(new FormData(event.target as HTMLFormElement))
		if (!UserCredentials.is(credentials)) {
			console.log("missing email or pw")
			this.notice.emit(Notice.warn("Both email and password is required to login."))
		} else if (!credentials.user.match(/^\S+@\S+$/)) {
			console.log("not an email")
			this.notice.emit(Notice.warn("Provided email is not an email."))
		} else
			this.login.emit(credentials)
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
						<smoothly-submit>Login</smoothly-submit>
						<p>
							Do you not have an account? <a href="/register">Create a new account</a>
						</p>
					</form>
				</div>
			</div>
		)
	}
}
