import { Component, Event, EventEmitter, h, Host, Prop, State, VNode } from "@stencil/core"
import { langly } from "langly"
import { smoothly } from "smoothly"
import { userwidgets } from "@userwidgets/model"
import { model } from "../../../model"
import * as translation from "./translation"

@Component({
	tag: "userwidgets-login-self-sign-on",
	styleUrl: "style.css",
	scoped: true,
})
export class UserwidgetsLoginSelfSignOn {
	@Prop() state: model.State
	@State() organization?: userwidgets.Organization
	@State() translate: langly.Translate = translation.create("en")
	@Event() userwidgetsLoginMode: EventEmitter<{ mode: "login" | "sign" | "register" }>
	@Event() notice: EventEmitter<smoothly.Notice>

	loginModeHandler(event: MouseEvent, mode: "login" | "sign" | "register"): void {
		event.preventDefault()
		this.userwidgetsLoginMode.emit({ mode })
	}

	async submitHandler(event: CustomEvent<smoothly.Submit>): Promise<void> {
		event.stopPropagation()
		const raw = event.detail.value
		const organization = userwidgets.Organization.Creatable.type.get(raw)
		if (!organization) {
			console.error("organization flaws:", raw, userwidgets.Organization.Creatable.flaw(raw))
		} else {
			const result = await this.state.organizations.create(organization)
			if (!result) {
				console.error("Failed to create organization.")
				this.notice.emit(smoothly.Notice.failed(this.translate("Failed to create organization.")))
			} else {
				this.notice.emit(smoothly.Notice.succeeded(this.translate("Successfully created organization.")))
				this.organization = result
				event.detail.result(true)
			}
		}
		event.detail.result(false)
	}

	render(): VNode | VNode[] {
		return (
			<Host>
				{this.organization ? (
					<p>{this.translate("An email have been sent to you with with a link to complete registration.")}</p>
				) : (
					<smoothly-form looks={"border"} type={"create"} onSmoothlyFormSubmit={e => this.submitHandler(e)}>
						<smoothly-input type={"text"} name={"name"}>
							{this.translate("Organization name")}
						</smoothly-input>
						<smoothly-input type={"email"} name={"user"}>
							{this.translate("Your email")}
						</smoothly-input>
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
				)}
			</Host>
		)
	}
}
