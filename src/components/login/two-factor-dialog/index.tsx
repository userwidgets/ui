import { Component, Event, EventEmitter, h, Host, Prop, State } from "@stencil/core"
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
export class UserwidgetsTwoFactorDialog {
	@Prop() state: model.State
	@Prop() credentials?: userwidgets.User.Credentials
	@State() processing = false
	@State() code?: string
	@Event() notice: EventEmitter<smoothly.Notice>
	@Event() userwidgetsAuthenticate: EventEmitter<string>
	@Event() userwidgetsCancel: EventEmitter
	@State() translate: langly.Translate = translation.create("en")

	componentWillLoad() {
		this.state.locales.listen("language", language => language && (this.translate = translation.create(language)))
	}
	handleSubmit(event: CustomEvent<any>) {
		event.preventDefault()
		this.processing = true
		if (!event.detail.code || !new RegExp(/^(\d{6}|\d{8})$/).test(event.detail.code))
			this.notice.emit(smoothly.Notice.warn(this.translate("Authentication code must consist of six or eight digits.")))
		else
			this.userwidgetsAuthenticate.emit(event.detail.code)
		this.processing = false
	}

	render() {
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
