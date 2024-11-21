import { Component, Event, EventEmitter, h, Host, State, VNode } from "@stencil/core"
import { langly } from "langly"
import * as translation from "./translation"

@Component({
	tag: "userwidgets-login-self-sign-on",
	styleUrl: "style.css",
	scoped: true,
})
export class UserwidgetsLoginSelfSignOn {
	@State() translate: langly.Translate = translation.create("en")
	@Event() userwidgetsLoginMode: EventEmitter<{ mode: "login" | "sign" | "register" }>

	loginModeHandler(event: MouseEvent, mode: "login" | "sign" | "register"): void {
		event.preventDefault()
		this.userwidgetsLoginMode.emit({ mode })
	}

	render(): VNode | VNode[] {
		return (
			<Host>
				<smoothly-form>
					<smoothly-input type={"text"}>{this.translate("Organization name")}</smoothly-input>
					<smoothly-input type={"email"}>{this.translate("Your email")}</smoothly-input>
					<p slot="submit">
						{this.translate("Already have an account? ")}
						<a href={window.origin} onClick={e => this.loginModeHandler(e, "login")}>
							{this.translate("Login")}
						</a>
					</p>
					<smoothly-input-submit slot="submit" color="primary">
						<span>{this.translate("Register")}</span>
					</smoothly-input-submit>
				</smoothly-form>
			</Host>
		)
	}
}
