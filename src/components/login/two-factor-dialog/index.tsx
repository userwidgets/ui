import { Component, ComponentWillLoad, Event, EventEmitter, h, Host, Prop, State, VNode } from "@stencil/core"
import * as langly from "langly"
import { smoothly } from "smoothly"
import { SmoothlyFormCustomEvent } from "smoothly/dist/types/components"
import { userwidgets } from "@userwidgets/model"
import { model } from "../../../model"
import * as translation from "./translation"
@Component({
	tag: "userwidgets-two-factor-dialog",
	styleUrl: "style.css",
	scoped: true,
})
export class UserwidgetsTwoFactorDialog implements ComponentWillLoad {
	@Prop() state: model.State
	@Prop() credentials?: userwidgets.User.Credentials
	@State() processing = false
	@State() code?: string
	@Event() notice: EventEmitter<smoothly.Notice>
	@Event() userwidgetsAuthenticate: EventEmitter<string>
	@Event() userwidgetsCancel: EventEmitter
	@State() translate: langly.Translate = translation.create("en")

	componentWillLoad(): void {
		this.state.locales.listen("language", language => language && (this.translate = translation.create(language)))
	}
	handleSubmit(
		event: SmoothlyFormCustomEvent<{ type: "update" | "change" | "fetch" | "create" | "remove"; value: smoothly.Data }>
	): void {
		event.preventDefault()
		this.processing = true
		if (typeof event.detail.value.code != "string" || !event.detail.value.code.match(/^(\d{6}|\d{8})$/))
			this.notice.emit(smoothly.Notice.warn(this.translate("Authentication code must consist of six or eight digits.")))
		else
			this.userwidgetsAuthenticate.emit(event.detail.value.code)
		this.processing = false
	}

	render(): VNode | VNode[] {
		return (
			<Host>
				<slot name={"logo"} />
				<smoothly-display>
					{this.translate("Please enter a six digit code from your authenticator or a eight digit recovery code.")}
				</smoothly-display>
				<smoothly-form processing={this.processing} looks="border" onSmoothlyFormSubmit={e => this.handleSubmit(e)}>
					<smoothly-input type="text" name="code" onSmoothlyInput={e => (this.code = e.detail.code)}>
						{this.translate("Code")}
					</smoothly-input>
					<smoothly-button onClick={() => this.userwidgetsCancel.emit()} disabled={false} color="danger" slot="submit">
						{this.translate("Cancel")}
					</smoothly-button>
					<smoothly-submit
						disabled={this.processing || !new RegExp(/^(\d{6}|\d{8})$/).test(this.code ?? "")}
						color="primary"
						slot="submit">
						{this.translate("Login")}
					</smoothly-submit>
				</smoothly-form>
			</Host>
		)
	}
}
