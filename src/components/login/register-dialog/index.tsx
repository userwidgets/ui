import { Component, ComponentWillLoad, Event, EventEmitter, h, Host, Prop, State, VNode } from "@stencil/core"
import * as langly from "langly"
import { smoothly } from "smoothly"
import { userwidgets } from "@userwidgets/model"
import { model } from "../../../model"
import * as translation from "./translation"

@Component({
	tag: "userwidgets-register-dialog",
	styleUrl: "style.css",
	scoped: true,
})
export class UserwidgetsRegister implements ComponentWillLoad {
	@Prop() invite: userwidgets.User.Invite
	@State() key?: userwidgets.User.Key
	@Prop() state: model.State
	@Event() notice: EventEmitter<smoothly.Notice>
	@Event() userwidgetsRegister: EventEmitter<
		Pick<smoothly.Submit, "result"> & {
			invite: userwidgets.User.Invite
			credentials: userwidgets.User.Credentials.Register
		}
	>
	// @Event() userwidgetsActiveAccount: EventEmitter<boolean>
	@Event() userwidgetsLoginMode: EventEmitter<{ mode: "login" | "register" | "sign" }>
	@State() translate: langly.Translate = translation.create("en")

	componentWillLoad(): void {
		this.state.locales.listen("language", language => language && (this.translate = translation.create(language)))
	}

	async handleSubmit(event: CustomEvent<smoothly.Submit>): Promise<void> {
		event.stopPropagation()
		const detail = {
			...event.detail.value,
			user: this.invite.email,
		}
		if (!userwidgets.User.Credentials.Register.is(detail)) {
			this.notice.emit(
				smoothly.Notice.warn(
					this.translate(
						"User credential requires a first and last name. Additionally the Password and Repeat password must be identical and at least 6 characters long."
					)
				)
			)
			console.error(userwidgets.User.Credentials.Register.flaw(detail), detail)
			event.detail.result(false)
		} else
			this.userwidgetsRegister.emit({
				invite: this.invite,
				credentials: detail,
				result: event.detail.result,
			})
	}
	loginModeHandler(event: MouseEvent, mode: "login" | "register" | "sign"): void {
		event.preventDefault()
		this.userwidgetsLoginMode.emit({ mode })
	}

	render(): VNode | VNode[] {
		return (
			<Host>
				<slot name={"logo"} />
				<smoothly-form looks="border" onSmoothlyFormSubmit={e => this.handleSubmit(e)}>
					<smoothly-input class="email" type="text" name="user" readonly value={this.invite.email}>
						{this.translate("Email")}
					</smoothly-input>
					<smoothly-input type="text" name="name.first">
						{this.translate("First name")}
					</smoothly-input>
					<smoothly-input type="text" name="name.last">
						{this.translate("Last name")}
					</smoothly-input>
					<smoothly-input type="password" name="password.new">
						{this.translate("Password")}
					</smoothly-input>
					<smoothly-input type="password" name="password.repeat">
						{this.translate("Repeat password")}
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
			</Host>
		)
	}
}
