import { Component, ComponentWillLoad, Event, EventEmitter, h, Host, Prop, State, VNode } from "@stencil/core"
import * as langly from "langly"
import { smoothly } from "smoothly"
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
	@State() code?: string
	@Event() notice: EventEmitter<smoothly.Notice>
	@Event() userwidgetsAuthenticate: EventEmitter<Pick<smoothly.Submit, "result"> & { code: string }>
	@Event() userwidgetsCancel: EventEmitter
	@State() translate: langly.Translate = translation.create("en")

	componentWillLoad(): void {
		this.state.locales.listen("language", language => language && (this.translate = translation.create(language)))
	}
	handleSubmit(event: CustomEvent<smoothly.Submit>): void {
		event.stopPropagation()
		if (typeof event.detail.value.code != "string" || !event.detail.value.code.match(/^(\d{6}|\d{8})$/)) {
			this.notice.emit(smoothly.Notice.warn(this.translate("Authentication code must consist of six or eight digits.")))
			event.detail.result(false)
		} else
			this.userwidgetsAuthenticate.emit({ code: event.detail.value.code, result: event.detail.result })
	}

	render(): VNode | VNode[] {
		return (
			<Host>
				<slot name={"logo"} />
				<smoothly-display>
					{this.translate("Please enter a six digit code from your authenticator or a eight digit recovery code.")}
				</smoothly-display>
				<smoothly-form looks="border" onSmoothlyFormSubmit={e => this.handleSubmit(e)}>
					<smoothly-input type="text" name="code" onSmoothlyInput={e => (this.code = e.detail.code)}>
						{this.translate("Code")}
					</smoothly-input>
					<smoothly-button onClick={() => this.userwidgetsCancel.emit()} disabled={false} color="danger" slot="submit">
						{this.translate("Cancel")}
					</smoothly-button>
					<smoothly-input-edit slot={"edit"} type={"button"} size={"icon"} color={"primary"} fill={"default"} />
					<smoothly-input-reset slot={"reset"} type={"form"} size={"icon"} color={"warning"} fill={"default"} />
					<smoothly-input-submit slot={"submit"} disabled={!this.code?.match(/^(\d{6}|\d{8})$/)} color={"primary"}>
						<span>{this.translate("Login")}</span>
					</smoothly-input-submit>
				</smoothly-form>
			</Host>
		)
	}
}
